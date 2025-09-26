export default async function fetchData(){
    return fetch("./src/JS/data/quiz.json")
    .then(res => res.json())
    .then(data => data);
}