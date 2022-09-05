const form1 = document.getElementById("form2");
const image = document.getElementById("image1")
const render = (url)=>
{
    if(!url)
    return;
    image.src=url;
    image.classList.add('show');
};

form1.addEventListener('submit', (event) =>
{
    event.preventDefault();
    const formdata = new FormData(form1);
    const data = formdata.get("userData");
    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+data;
    render(url);
})