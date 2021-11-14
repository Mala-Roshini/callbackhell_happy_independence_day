//creating a div to display count down and wish
const divEle = document.createElement("div");
document.body.appendChild(divEle);
var mainDiv = document.querySelectorAll("div")[0];


window.addEventListener('load', () =>{ 
  var response = 
    {
      count :10,
      wish : "Happy Independence Day"
    }
  setTimeout((value) => {
    mainDiv.innerText = `00  :  00  :  ${value}`;
    var result = value;
    setTimeout((value) => {
      var result = value-1;
      mainDiv.innerText = `00  :  00  :  ${value}`;
      setTimeout((value) => {
        var result = value-1;
        mainDiv.innerText = `00  :  00  :  ${value}`;
        setTimeout((value) => {
          var result = value-1;
          mainDiv.innerText = `00 :  00 : ${value}`;
          setTimeout((value) => {
            var result = value-1;
            mainDiv.innerText = `00  :  00  :  ${value}`;
            setTimeout((value) => {
              var result = value-1;
              mainDiv.innerText = `00  :  00  :  ${value}`;
              setTimeout((value) => {
                var result = value-1;
                mainDiv.innerText = `00  :  00  :  ${value}`;
                setTimeout((value) => {
                  var result = value-1;
                  mainDiv.innerText = `00  :  00  :  ${value}`;
                  setTimeout((value) => {
                    var result = value-1;
                    mainDiv.innerText = `00  :  00  :  ${value}`;
                    setTimeout((value) => {
                      var result = `00  :  00  :  ${value}`;
                      mainDiv.innerText = result;
                      setTimeout((value) => {
                        mainDiv.innerText = value;
                      },1000, response.wish) 
                    },1000, result) 
                  },1000, result) 
                },1000, result) 
              },1000, result) 
            },1000, result) 
          },1000, result) 
        },1000, result) 
      },1000, result) 
    },1000, result)  
  },1000, response.count)
})
