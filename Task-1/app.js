const item=document.querySelectorAll(".Item");
document.addEventListener("scroll",()=>{
    const header=document.querySelector(".header");
    console.log(item);
    if(window.scrollY>0)
    {   
        header.classList.add("heading_scroll");
        console.log("scrol");
        item.forEach((item)=>
        {
            item.classList.add("Item_scroll");
        })
    }
    else{
        header.classList.remove("heading_scroll")
        item.forEach((item)=>
        {
            item.classList.remove("Item_scroll");
        })

    }
})