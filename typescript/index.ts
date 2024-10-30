
const ages:number[] = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18];

const children:number[] =ages.filter(function (age){
	return (age<18);
})
console.log(children)



