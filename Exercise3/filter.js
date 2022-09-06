
// checks the data tag (filter selection) and determines if the recipe is passes the filter (filter by).
// when calling this function, by clicking on a category and then a filter, the website will 
//only display recipes that have tags that pass the filter

function filterCategory(filterSelection, filterBy){
let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
// console.log(recipeCards);

for(let listItem of recipeCards){
    // console.log(listItem.dataset.author)
    if(listItem.dataset[filterBy] === filterSelection){
        listItem.style.display = "flex";
    } else {
        listItem.style.display = "none";
    }
}
}


//removes all filters
function allCategories(){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    // console.log(recipeCards); 
    
    for(let listItem of recipeCards){
        // console.log(listItem.dataset.author)
        listItem.style.display = "flex";
        }
    }