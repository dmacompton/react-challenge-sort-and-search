export function getJSON(url, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        error(xhr.responseText);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

export function compton(a) {
  console.log(a);
}