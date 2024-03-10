// 用于表单验证的工具函数
/* 合法uri*/
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}


/**
 * 邮箱
 * @param {*} s
 */
export function isEmail (s) {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone (s) {
  return /^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9])|(16[6]))\d{8}$/.test(
    s,
  )
}

/**
 * 判断手机号码格式是否正确
 */
export function isvalidatePhone (phone) {
  let result = false
  let msg = ''
  if (!validatenull(phone)) {
    if (phone.length === 11) {
      if (isPhone(phone)) {
        result = true
      } else {
        msg = '手机号码格式不正确'
      }
    } else {
      msg = '手机号码长度不为11位'
    }
  } else {
    msg = '手机号码不能为空'
  }
  return {
    result: result,
    msg: msg,
  }
}

/**
 * 判断邮箱格式是否正确
 */
export function isvalidateEmail (email) {
  let result = false
  let msg = ''
  if (!validatenull(email)) {
    if (isEmail(email)) {
      result = true
    } else {
      msg = '邮箱格式不正确'
    }
  } else {
    msg = '邮箱不能为空'
  }
  return {
    result: result,
    msg: msg,
  }
}

/**
 * 判断是否为空
 */
export function validatenull (val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val === 'null' || val === null || val === 'undefined' || val === undefined || val === '')
      return true
    return false
  }
  return false
}
