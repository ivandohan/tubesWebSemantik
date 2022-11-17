from SPARQLWrapper import SPARQLWrapper, JSON
END_POINT = 'http://localhost:3030/data_bukuu/sparql'

def set_up_query(url, keyword):
    detailsKey = keyword.lower()
    sparql = SPARQLWrapper(url)
    sparql.setQuery("""
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX book: <http://example.org/book/>

        SELECT ?m ?title ?author ?year ?publisher ?page ?isbn ?country ?summary ?link ?image ?no WHERE {
        ?m rdf:type ?n;
            rdfs:label ?title;
            book:author ?author;
            book:year ?year;
            book:publisher ?publisher;
            book:summary ?summary;
            book:page ?page;
            book:isbn ?isbn;
            book:country ?country;
            book:image ?image;
            foaf:homepage ?link;
            book:number ?no.
        FILTER(?no = \""""+ detailsKey +"""\").
        FILTER(?n IN (book:nonfiction, book:fiction)).
        } 
        LIMIT 10
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

def run_details(keywordParam):
    return consume_data(set_up_query(END_POINT, keyword=keywordParam))

# print(run_details("1"))