
const URL_ROOT = 'http://localhost:3004';

export function getCars(keywords){
    
    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, {method: 'GET'})
                    .then(res => res.json())

    return{
        type: 'SEARCH_CARS',
        payload:request
    }

}

export function carDetail(id){

    const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, {method: 'GET'})
                    .then(res => res.json())

    console.log(request);
    
    return{
        type: 'CAR_DETAIL',
        payload:request
    }

}

export function clearDetail(){
    
}