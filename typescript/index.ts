
const ages:number[] = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18];

const children:number[] =ages.filter(function (age){
	return (age<18);
})
console.log(children)
const paragraph:string = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"

// @ts-ignore
const newParagraph:string =paragraph.replaceAll("j","k")
console.log(newParagraph)




