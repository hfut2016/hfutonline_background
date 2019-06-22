function feedback(data){
 
  data = data.filter(item=>item!=='');

  let resArr = []
  data.forEach(it=>{
    try {
      // console.log(it.id);
      resArr.push({
      'user_id': it.user_id,
      'content': it.content,
      'create_time': it.create_time,
    })
    } catch (error) {
      console.log(error);

    }
  })
  let result = {
    success:true,
    data:{},
    deadline: new Date().toLocaleString()
  }
  result['data'] = resArr;
  return result
}

module.exports = {
  'feedback': feedback,
}