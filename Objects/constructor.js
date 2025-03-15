

function Book(id, title){
    return {
        id, 
        title, 
        readBook(){
            console.log("Book is " + title)
        }
    }
}

const book = new Book("1", "Mindset")
book.readBook()