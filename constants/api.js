export const getBrands = () => {
    fetch('http://localhost:3000/api/brands', {
        method: 'GET'
    })
        .then((res) => res.json())
        .then((responseJson) => {
            console.log("response json ");
            console.dir(responseJson)
            return responseJson.brands;
        })
}