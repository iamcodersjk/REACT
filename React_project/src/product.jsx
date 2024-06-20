
var abc=[
    {id:1, name:"product1", price:"101"},
    {id:2, name:"product2", price:"102"},
    {id:3, name:"product3", price:"103"},
    {id:4, name:"product4", price:"104"},
    {id:5, name:"product5", price:"105"},
]

function Products(){
    return(
        <div className="demo">
            <ul>
                {abc.map((a)=>(
                <li>{a.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Products