  // const getBiography = async function () {
  // 	let data = await fetch( 'resumeData.json')
  // 	.then(response => response.json())
  // 	console.log( data )
  // }

  // getBiography()
  import { jquery } from 'jquery'

  getResumeData = () =>{
    jquery.ajax({
      url:'resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log( data );
      },
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  getResumeData()