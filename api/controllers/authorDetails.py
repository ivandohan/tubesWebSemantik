from SPARQLWrapper import SPARQLWrapper, JSON
END_POINT = 'http://dbpedia.org/sparql'

def set_up_query(url, keyword):
    new_key = keyword.replace(" ", "_")
    sparql = SPARQLWrapper(url)
    q = """
        PREFIX dbr: <http://dbpedia.org/resource/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX dbo: <http://dbpedia.org/ontology/>
        PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>

        SELECT distinct  ?bio ?geo ?name ?wikilink ?country ?lat ?long where {
            dbr:"""+ new_key + """ a ?x;
            foaf:name ?name;
            rdfs:label ?label;
            foaf:isPrimaryTopicOf ?wikilink;
            dbo:abstract ?bio;
            dbo:birthPlace ?geo.
            ?geo rdfs:label ?country.
            ?geo geo:lat ?lat.
            ?geo geo:long ?long.
            FILTER (?x IN (dbo:Writer, dbo:Person, dbo:Scientist, dbo:Author, dbo:ilustrator)).
            FILTER(lang(?bio) = "en" && lang(?country) = "en").
        } LIMIT 1
    """
    # print(q)
    sparql.setQuery(q)

    sparql.setReturnFormat(JSON)
    results = sparql.query().convert()

    return results

def consume_data(dataset):
    listing = []

    # print(results)

    bindings = dataset['results']['bindings']
    # print(bindings)


    # print("== Children ==")
    for val in bindings:
        listing.append(val)

    return listing

def run_author(keywordParam):
    return consume_data(set_up_query(END_POINT, keyword=keywordParam))

# print(set_up_query(END_POINT, "Irvin_D.Yalom"))