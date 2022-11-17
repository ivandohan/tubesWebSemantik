from SPARQLWrapper import SPARQLWrapper, JSON
END_POINT = 'http://localhost:3030/data_bukuu/sparql'

def set_up_query(url, keyword):
    searchKey = keyword.lower()
    sparql = SPARQLWrapper(url)
    sparql.setQuery("""
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX book: <http://example.org/book/>

        SELECT ?m ?title ?image ?author ?summary ?link ?no WHERE {
            ?m rdf:type ?n;
            rdfs:label ?title;
            book:image ?image;
            book:author ?author;
            book:summary ?summary;
            foaf:homepage ?link;
            book:number ?no.
        FILTER(?n IN (book:nonfiction, book:fiction)).
        FILTER regex(lcase(str(?title)), \"""" + searchKey + """\", "i").
        }
    """)

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

def run_search(keywordParam):
    return consume_data(set_up_query(END_POINT, keyword=keywordParam))

# print(run_search("believe"))