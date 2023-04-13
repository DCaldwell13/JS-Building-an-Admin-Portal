
// Your Code Here
async function main(){
    const response = await fetch('http://localhost:3001/listBooks')
    let book = await response.json()

    async function updateLibrary(){
        let response = await fetch('http://localhost:3001/updateBooks', {
            method:"PATCH",
            header: {
               'Content-Type': "applicaion/json",
            },
            body: JSON.stringify({
                "id": 3,
                "title": "Legends of Arathrae",
                
            }),

    })
    
    let updateBook = await response.json();
    console.log(updateBook)

    };

    const submitButton = document.querySelector('#submitButton');
    book.forEach(mainLibrary);
    submitButton.addEventListener('click', updateLibrary);

};

function mainLibrary(book){
    let Container = document.getElementById('main')
       Container.innerHTML +=`
        <ul>
          <li>${book.title}</li>
          <button id = "submitButton">Submit</button>
       </ul>`
}

main();

//'quantity': document.getElementsByName(Library).value