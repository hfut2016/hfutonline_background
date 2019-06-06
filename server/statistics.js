function statistics(data){
  // name = data.length;
  // clazz = new Set(data.map(item => item.clazz));
  // major = new Set(data.map(item => item.major));
  data = data.filter(item=>item!=='');

  let department = new Set(data.map(item => item.department));

  let sumDepartment = {}
  department.forEach(it=>{
    let department = data.filter(item=>item.department===it);
    let major = new Set(department.map(item => item.major));
    
    let sumMajor = {}
    major.forEach(it=>{
      let major = department.filter(item=>item.major===it);
      let clazz =  new Set(major.map(item => item.clazz))

      let sumClazz = {}
      clazz.forEach(it=>{
        sumClazz[it] = {
          'sum':major.filter(item=>item.clazz===it).length,
          // 'detal':major.filter(item=>item.clazz===it).map(item => item.name)
        }
      })

      sumMajor[it] = {
        'sum':major.length,
        'detal':sumClazz
      }
    })

    sumDepartment[it] = {
      'sum': department.length,
      "detal":sumMajor
    }
  })
  let result = {
    success:true,
    data:{
      '统计': {
        '总人数': data.length,
        '学院数': department.size,
        '专业数': new Set(data.map(item => item.major)).size,
        '班级数': new Set(data.map(item => item.clazz)).size,
      },
      detal:''
    },
    deadline: new Date().toLocaleString()
  }
  result['data']['detal'] = sumDepartment;
  return result
}

module.exports = {
  'statistics': statistics,
}