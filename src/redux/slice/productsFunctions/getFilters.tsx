type productsEl = {
    category: string,
    company:string,
    colors:[]
}
export const getFilters = (products: []) => {
    const categories: string[] = [];
    const companies: string[] = [];
    const colors: string[] = [];
    products.forEach((el: productsEl) => {
        if (!categories.includes(el.category)) {
            categories.push(el.category)
        }
        if (!companies.includes(el.company)) {
            companies.push(el.company)
        }
        el.colors.forEach(el=>{
            if(!colors.includes(el)){
                colors.push(el)               //For Colors
            }
        })
        return
    })
    categories.unshift("All")
    companies.unshift("All")
    colors.unshift("All")
    const compMap = companies.map(el=>{  //For Select
        return {value:el,label:el}
    })
    return {
        categories,compMap,colors
    }
}



