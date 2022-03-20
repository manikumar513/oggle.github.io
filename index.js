$("#form").submit(function(e){
    e.preventDefault()

    var query=$("#search").val()
    let result=''
    
    var API_KEY='92966e44d5f1a4c99af3b8083722ceb5'

    var url='http://api.serpstack.com/search?access_key='+API_KEY+'&type=web&query='+query
    console.log(url)
        $("#result").html('')

    $.get(url,function(data){
        console.log(data)

        data.organic_results.forEach(res => {
            result=`
            <h1>${res.title}</h1><br><a target="_blank" herf="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>
            
            `
            $("#result").append(result)
        });
    })
    
    
   
})