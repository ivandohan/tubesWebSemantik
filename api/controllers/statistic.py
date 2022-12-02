from SPARQLWrapper import SPARQLWrapper, JSON
END_POINT = 'http://localhost:3030/data_bukuu/sparql'

def set_up_query(url):
    sparql = SPARQLWrapper(url)
    sparql.setQuery("""
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX book: <http://example.org/book/>

    SELECT (COUNT(DISTINCT ?buku) as ?totalBuku)
    (COUNT(DISTINCT ?bukuFiction) as ?totalBukuFiction) 
    (COUNT(DISTINCT ?bukuNonfiction) as ?totalBukuNonfiction) 
    WHERE {
        ?buku ?p ?n.
        ?bukuFiction rdf:type book:fiction.
        ?bukuNonfiction rdf:type book:nonfiction.
        FILTER(?n IN (book:nonfiction, book:fiction)).
    }
    """)
    sparql.setReturnFormat(JSON)
    results = sparql.query().convert()
    # print(results)

    return results


def consume_data(dataset):
    listing = []

    # print(results)

    bindings = dataset['results']['bindings']


    # print("== Children ==")
    for val in bindings:
        listing.append(val)

    # print(listing)
    return listing

def run_stats():
    return consume_data(set_up_query(END_POINT))

print(consume_data(set_up_query(END_POINT)))
# consume_data(set_up_query(END_POINT))