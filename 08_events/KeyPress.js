
const key = document.querySelector("#keyPress")

window.addEventListener("keydown",(e)=>{
key.innerHTML = `
<table>
  <tr>
    <th>key</th>
    <th>Key Code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === "" ? "space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
`
})