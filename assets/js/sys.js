/* Author:  Usevalad Khatkevich
 * Website: https://my77thblog.pp.ua/
 *          https://github.com/SEVA77/TemplateOfMyBlog
 * License: MIT License (see LICENSE)
 */
document.addEventListener("DOMContentLoaded", function () {
  let menu = new SlideMenu(document.getElementById('example-menu'), {
    showBackLink: true,
    submenuLinkAfter: ' <strong>&#10140;</strong>',
    backLinkBefore: ' <strong>&#8617;&nbsp;&nbsp;</strong>'
  });
  menu.open(animate = false);
});

//.sidebarr
function menu_click() {
  if (document.body.clientWidth < 948) {
    document.querySelectorAll(".sidebarr").forEach(sidebarr => {
      sidebarr.style.display = "block"
    });
    document.querySelectorAll(".overlay").forEach(sidebarr => {
      sidebarr.style.display = "block"
    })
  } else {
    alert("Разделы блога уже расположены в правой колонке.");
    let ele = document.getElementById('flexcontainer');
    window.scrollTo(ele.offsetLeft, ele.offsetTop);
  }
}

function close_menu() {
  document.querySelectorAll(".sidebarr").forEach(overlay => {
    overlay.style.display = ""
  });
  document.querySelectorAll(".overlay").forEach(overlay => {
    overlay.style.display = "none"
  })
}
