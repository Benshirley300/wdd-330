const list = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    },
    {
        label: 'Week 2 Notes',
        url: 'week2.index.html'
    }
]
const nav = document.getElementById('dynamic-nav')
for (let i = 0; i < list.length; ++i) {
    console.log('Something')
    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    newA.innerHTML = list[i].label;
    newA.href = list[i].url;
    newLi.appendChild(newA);
    nav.appendChild(newLi);
}
