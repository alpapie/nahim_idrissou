<script>
let headermen=""
let list=""
let spancl=""

let mobile =()=>{
  if (!headermen){
    headermen="cs_heading_color cs_mobile_toggle_active"
    list="cs_active"
    spancl="cs_toggle_active"
    return
  }
  headermen=""
    list=""
    spancl=""
}

</script>

    <header class="cs_site_header cs_style1 cs_sticky_header cs_heading_color {headermen}">
        <div class="cs_main_header">
          <div class="container">
            <div class="cs_main_header_in">
              <div class="cs_main_header_left">
                <a class="cs_site_branding" href="/">
                  <img src="/img/logo.svg" alt="Logo">
                </a>
                <nav class="cs_nav">
                  <ul class="cs_nav_list {list}">
                    <li ><a on:click={mobile}  href="/">Acceuil</a></li>
                    <li><a on:click={mobile} href="/doctors">Medecins</a></li>
                  </ul>
                  <span on:click={mobile} class="cs_menu_toggle {spancl}"><span></span></span>
                </nav>
              </div>
              
            </div>
          </div>
        </div>
      </header>

      <!-- End Header Section -->