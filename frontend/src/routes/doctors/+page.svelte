<script>
  import { onMount } from "svelte";

  let medecins = [];
  let currentPage = 1;

  const fetchMedecins = async (page) => {
    const response = await fetch(`http://localhost:3000/medecins?page=${page}`);
    const data = await response.json();
    return data;
  };

  const loadMedecins = async () => {
    const data = await fetchMedecins(currentPage);
    medecins = data.data;
  };

  const nextPage = async () => {
    currentPage++;
    await loadMedecins();
  };

  const previousPage = async () => {
    if (currentPage > 1) {
      currentPage--;
      await loadMedecins();
    }
  };

  onMount(loadMedecins);
</script>

<!-- Start Banner  -->
<section
  class="cs_banner cs_style_5 cs_bg_filed"
  data-src="img/doctors/banner_bg.svg"
>
  <div class="cs_banner_img">
    <img src="img/doctors/banner_img.png" alt="Banner Image" />
  </div>
  <div class="container">
    <div class="cs_banner_text">
      <h2 class="cs_banner_title cs_fs_72">
        Je vous présente<br /> nos experts
      </h2>
      <p class="cs_banner_subtitle cs_fs_20 mb-0 cs_heading_color">
       
La liste des médecins certifiés avec des années <br />d'expérience professionnelle. 
      </p>
    </div>
  </div>
</section>
<!-- End Banner  -->
<!-- Start All Doctors -->
<div class="cs_height_65"></div>
<div class="container">
  <div class="cs_doctors_heading">
    <div class="cs_isotop_filter cs_style1">
      <p class="mb-0">Sort by</p>
      <ul class="cs_mp0">
        <li class="active"><a href="#" data-filter="*">Tous</a></li>
        <li><a href="#" data-filter=".emergency">Urgence</a></li>
        <li><a href="#" data-filter=".pediatric">Pédiatrie</a></li>
        <li><a href="#" data-filter=".cardiology">Cardiologie</a></li>
        <li><a href="#" data-filter=".psychiatry">Psychiatrie</a></li>        
      </ul>
    </div>
    <div class="cs_view_box">
      <span>Showing 9 items</span>
      <div class="cs_view_box_in">
        <button type="button" class="cs_grid_view active">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http:www.w3.org/2000/svg"
          >
            <path
              d="M0 11.8571H11.8571V0H0V11.8571ZM1.5625 1.5625H10.2948V10.2948H1.5625V1.5625ZM13.1429 0V11.8571H25V0H13.1429ZM23.4375 10.2948H14.7052V1.5625H23.4375V10.2948ZM0 25H11.8571V13.1429H0V25ZM1.5625 14.7052H10.2948V23.4375H1.5625V14.7052ZM13.1429 25H25V13.1429H13.1429V25ZM14.7052 14.7052H23.4375V23.4375H14.7052V14.7052Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button type="button" class="cs_list_view">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http:www.w3.org/2000/svg"
          >
            <path
              d="M0 11.8571H12.2396V0H0V11.8571ZM1.6129 1.5625H10.6267V10.2946H1.6129V1.5625ZM0 25H12.2396V13.1429H0V25ZM1.6129 14.7052H10.6267V23.4375H1.6129V14.7052ZM25 0.85022V2.41272H14.3731V0.85022H25ZM14.3731 9.44458H25V11.0071H14.3731V9.44458ZM14.3731 5.1475H25V6.71H14.3731V5.1475ZM14.3731 13.9929H25V15.5554H14.3731V13.9929ZM14.3731 22.5873H25V24.1498H14.3731V22.5873ZM14.3731 18.2902H25V19.8527H14.3731V18.2902Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="cs_height_65"></div>
 <!-- App.svelte -->
        <div class="cs_isotop cs_style1 cs_grid_view_wrap cs_isotop_col_3 cs_has_gutter_24" style="display: flex; flex-wrap: wrap;">
            {#each medecins as medecin, index}
                <div class="cs_isotop_item emergency" style="width: calc(33.333333% - 16px); margin: 8px;">
                    <div class="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden">
                        <div class="cs_member_img">
                            <a href="doctor-details.html" class="d-block"><img src={`img/doctors/doctor_${medecin.id % 11}.png`} alt="Doctor"/></a>
                            <div class="cs_label cs_white_color cs_accent_bg">Localité {medecin.localite}</div>
                        </div>
                        <div class="cs_team_meta cs_white_bg">
                            <div>
                                <h3 class="cs_member_name cs_fs_32"><a href="doctor-details.html">Dr. {medecin.nom} {medecin.prenom}</a></h3>
                                <p class="cs_member_designation cs_heading_color cs_medium">Spécialiste en médecine</p>
                                <p class="cs_member_description">Code postal {medecin.code_postal}</p>
                            </div>
                            <div>
                                <div class="cs_social_links">
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- .cs_isotop_item -->
                {#if (index + 1) % 3 === 0}
                    <div class="cs_isotop cs_style1 cs_grid_view_wrap cs_isotop_col_3 cs_has_gutter_24" style="display: flex; flex-wrap: wrap;"></div>
                {/if}
            {/each}
        </div>

  <div class="cs_height_60"></div>
  <ul class="cs_pagination_box">
    <button on:click={previousPage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
    </button>
    <button on:click={nextPage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
    </button>
    
  </ul>
</div>
<div class="cs_height_200 cs_height_xl_150 cs_height_lg_110"></div>

