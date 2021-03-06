function isNull(str) {
  if (str == "") return true;
  var regu = "^[ ]+$";
  var re = new RegExp(regu);
  return re.test(str);
}

function login() {
  var uname = document.getElementById("username ").value;
  var passwd = document.getElementById("password").value;
  if (isNull(uname)) {
    alert('用户名不能为空');
  } else {
    if (isNull(passwd)) {
      alert('密码不能为空');
    } else {
      var xhr = null;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }
      xhr.open("post", "http://localhost/admin/login", "true");
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      xhr.send("username=" + uname + "&password=" + passwd);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var data = xhr.responseText;
          var n_data = JSON.parse(data);
          if (n_data.code == 1) {
            alert(n_data.message)
            window.location.href = '/admin';
          }
        }
      }
    }
  }
}

function logout() {
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhr.open("get", "http://localhost/admin/logout", "true");
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = xhr.responseText;
      var n_data = JSON.parse(data);
      if (n_data.code == 1) {
        alert(n_data.message);
        window.location.href = '/admin';
        window.location.reload(true);
      }
    }
  }
  xhr.send();
}

function addblog() {
  var blogName = document.getElementById('blogName').value;
  var blogLable = document.getElementById('blogLable').value;
  var blogAbs = document.getElementById('blogAbs').value;
  var blogCon = document.getElementById('blogCon').value;
  if (isNull(blogName)) {
    alert('文章名字不能为空');
  } else {
    if (isNull(blogLable)) {
      alert('文章标签不能为空');
    } else {
      if (isNull(blogAbs)) {
        alert('文章摘要不能为空');
      } else {
        if (isNull(blogCon)) {
          alert('文章内容不能为空');
        } else {
          var xhr = null;
          if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
          } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
          }

          xhr.open("post", "http://localhost/api/addBlog", "true");
          xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
          xhr.send("blogName=" + blogName + "&blogLable=" + blogLable + "&blogAbs=" + blogAbs + "&blogCon=" + blogCon);
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
              var data = xhr.responseText;
              if (data) {
                alert("发布成功！");
                window.location.reload(true);
                document.getElementById('blogName').value = null;
                document.getElementById('blogLable').value = null;
                document.getElementById('blogAbs').value = null;
                document.getElementById('blogCon').value = null;
              } else {
                alert('发布失败！');
              }
            }
          }
        }
      }
    }
  }
}

function blogList() {
  var div = document.getElementById("blogList");
  var blogID = Array();
  var blogName = Array();
  var blogLable = Array();
  var blogAbs = Array();
  var blogTime = Array();
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhr.open("get", "http://localhost/api/blogList", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = xhr.responseText;
      var message = JSON.parse(data)
      for (var i = message.length - 1; i >= 0; i--) {
        blogID[i] = message[i].id;
        blogName[i] = message[i].blog_name;
        blogLable[i] = message[i].blog_lable;
        blogAbs[i] = message[i].blog_abs;
        blogTime[i] = message[i].blog_time;
        add(blogID[i], blogName[i], blogAbs[i], blogTime[i]);
      }

      function add(blogID, blogName, blogAbs, blogTime) {
        var listDiv = document.createElement('div');
        listDiv.setAttribute("class", "listDiv");
        var oDt = document.createElement('h3');
        oDt.innerHTML = blogName;
        var oDd1 = document.createElement('p');
        oDd1.innerHTML = blogAbs;
        oDd1.className = ("spen");
        var oDd2 = document.createElement('p');
        oDd2.innerHTML = blogTime;
        oDd2.className = ("date");
        div.appendChild(listDiv);
        listDiv.appendChild(oDt);
        listDiv.appendChild(oDd1);
        listDiv.appendChild(oDd2);
      }
    }
  }
  xhr.send();
}


function blogModify() {
  var blogID = document.getElementById('blogID').value;
  var blogName = document.getElementById('blogName').value;
  var blogLable = document.getElementById('blogLable').value;
  var blogAbs = document.getElementById('blogAbs').value;
  var blogCon = document.getElementById('blogCon').value;

  if (isNull(blogName)) {
    alert('文章名字不能为空');
  } else {
    if (isNull(blogLable)) {
      alert('文章标签不能为空');
    } else {
      if (isNull(blogAbs)) {
        alert('文章摘要不能为空');
      } else {
        if (isNull(blogCon)) {
          alert('文章内容不能为空');
        } else {
          console.log(1)
          var xhr = null;
          console.log(2)
          if (window.XMLHttpRequest) {
            console.log(3)
            xhr = new XMLHttpRequest();
          } else {
            console.log(4)
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
          }

          console.log(blogID)
          xhr.open("post", "http://localhost/api/modifyBlog", "true");
          xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
          xhr.send("blogID=" + blogID + "&blogName=" + blogName + "&blogLable=" + blogLable + "&blogAbs=" + blogAbs + "&blogCon=" + blogCon);
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
              var data = xhr.responseText;
              if (data == 'OK') {
                alert("修改成功！")
                window.location.href = '/admin';
              }
            }
          }
        }
      }
    }
  }
}

function getBlog() {
  var url = decodeURI(window.location.href);
  var argsIndex = url.split("?id=");
  var id = argsIndex[1];
  console.log(id);
  var blogID = document.getElementById('blogID');
  var blogName = document.getElementById('blogName');
  var blogLable = document.getElementById('blogLable');
  var blogAbs = document.getElementById('blogAbs');
  var blogCon = document.getElementById('blogCon');
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhr.open("post", "http://localhost/api/getBlog", "true");
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
  xhr.send("blogId=" + id);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = xhr.responseText;
      var message = JSON.parse(data)
      blogID.value = id;
      blogName.value = message.blogName;
      blogLable.value = message.blogLable;
      blogAbs.value = message.blogAbs;
      blogCon.value = message.blogCon;
    }
  }
}

function messagelist() {
  var div = document.getElementById("list");
  var content = Array();
  var name = Array();
  var date = Array();
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xhr.open("get", "http://localhost/api/messageList", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = xhr.responseText;
      var message = JSON.parse(data)
      for (var i = message.length - 1; i >= 0; i--) {
        content[i] = message[i].content;
        date[i] = message[i].date;
        name[i] = message[i].uname;
        add(name[i], content[i], date[i]);
      }

      function add(name, content, date) {
        var listDiv = document.createElement('div');
        listDiv.setAttribute("class", "listDiv");
        var oDt = document.createElement('h4');
        oDt.innerHTML = name + "说：";
        var oDd1 = document.createElement('p');
        oDd1.innerHTML = content;
        oDd1.className = ("spen");
        var oDd2 = document.createElement('p');
        oDd2.innerHTML = date;
        oDd2.className = ("date");
        div.appendChild(listDiv);
        listDiv.appendChild(oDt);
        listDiv.appendChild(oDd1);
        listDiv.appendChild(oDd2);
      }
    }
  }
  xhr.send();
}

function addmessage() {
  var name = document.getElementById('username').value;
  var lyConten = document.getElementById('lyConten').value;
  if (isNull(name)) {
    alert('署名不能为空');
  } else {
    if (isNull(lyConten)) {
      alert('留言内容不能为空');
    } else {
      var xhr = null;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }
      xhr.open("post", "http://localhost/api/addMessage", "true");
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      xhr.send("name=" + name + "&lyConten=" + lyConten);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var data = xhr.responseText;
          if (data) {
            alert("留言成功！");
            window.location.reload(true);
            document.getElementById("username").value = null;
            document.getElementById("lyConten").value = null;
          } else {
            alert('留言失败！');
          }
        }
      }
    }
  }
}