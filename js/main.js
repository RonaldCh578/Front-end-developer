document.addEventListener('DOMContentLoaded', (event) =>{

    initialiceContent();
    
});

function initialiceContent(){

    const content = [
        { menu_home: "HOME" },
        { menu_about: "ABOUT" },
        { menu_work: "WORK" },
        { menu_blog: "BLOG" },
        { menu_contact: "CONTACT" },
        { menu_request: "Request for quote" },
        { logo: "./images/logo.png" },
        { intro: "A multi-talented freelance web desiger &amp; front-end developer"},
        { intro_btn: "Download CV" },
        { about_title: "About" },
        { transform: "I transform ideas into digital solutions that help clients better connect with their audiences. I believe having a clean and minimal design is the best way to make websites elegant and functional..."},
        { simply: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"},
        { popular: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        { passages: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        { design: "Design is a plan for arranging elements in such a way as best to accomplish a particular purpose."},
        { quote_icon1: "fas fa-comment quote-icon fa-stack-2x" },
        { quote_icon2: "fas fa-quote-right quote-color fa-stack-1x" },
        { author_phrase: "- Charles Eames" },
        { contact_title: "Contact" },
        { contact_text: "Start your project today or Maybe you're here just to say hello?" },
        { contact_btn: "Send now" },
        { email_icon: "fas fa-envelope" },
        { twitter_icon: "fab fa-twitter" },
        { dribble_icon: "fab fa-dribbble" },
        { linkedin_icon: "fab fa-linkedin-in" },
        { behance_icon: "fab fa-behance" },
        { rights_message: "2020 All Rights Reserved." },
        { mob_menu: "mobile-menu fa fa-bars"},
        { mob_menu_close: "mobile-menu-close fa fa-window-close"},
    ];

    let logo = document.body.getElementsByTagName("img")[0];
    logo.src = content[6].logo;

    let home = document.body.getElementsByTagName("a")[1];
    home.textContent = content[0].menu_home;

    let about = document.body.getElementsByTagName("a")[2];
    about.textContent = content[1].menu_about;
    
    let work = document.body.getElementsByTagName("a")[3];
    work.textContent = content[2].menu_work;

    let blog = document.body.getElementsByTagName("a")[4];
    blog.textContent = content[3].menu_blog;

    let contact = document.body.getElementsByTagName("a")[5];
    contact.textContent = content[4].menu_contact;

    let request = document.body.getElementsByTagName("a")[6];
    request.textContent = content[5].menu_request;

    let intro = document.body.getElementsByTagName('h1')[0];
    intro.textContent = content[7].intro;

    let download = document.body.getElementsByTagName('span')[2];
    download.textContent = content[8].intro_btn;

    let about_title = document.body.getElementsByTagName('h2')[0];
    about_title.textContent = content[9].about_title;
    
    let transform = document.body.getElementsByTagName('h3')[0];
    transform.textContent = content[10].transform;

    let simply = document.body.getElementsByTagName('p')[0];
    simply.textContent = content[11].simply;

    let popular = document.body.getElementsByTagName('p')[1];
    popular.textContent = content[12].popular;

    let passages = document.body.getElementsByTagName('p')[2];
    passages.textContent = content[13].passages;

    let design = document.body.getElementsByTagName('p')[3];
    design.textContent = content[14].design;

    let quote_icon1 = document.body.getElementsByTagName('i')[1];
    quote_icon1.className = content[15].quote_icon1;

    let quote_icon2 = document.body.getElementsByTagName('i')[2];
    quote_icon2.className = content[16].quote_icon2;

    let phrase = document.body.getElementsByTagName('p')[4];
    phrase.textContent = content[17].author_phrase;

    let c_title = document.body.getElementsByTagName('h2')[1];
    c_title.textContent = content[18].contact_title;

    let c_text = document.body.getElementsByTagName('p')[5];
    c_text.textContent = content[19].contact_text;

    let c_btn = document.body.getElementsByTagName('input')[2];
    c_btn.value = content[20].contact_btn;

    let email = document.body.getElementsByTagName('i')[3];
    email.className = content[21].email_icon;

    let twitter = document.body.getElementsByTagName('i')[4];
    twitter.className = content[22].twitter_icon;

    let dribble = document.body.getElementsByTagName('i')[5];
    dribble.className = content[23].dribble_icon;

    let linkedin = document.body.getElementsByTagName('i')[6];
    linkedin.className = content[24].linkedin_icon;

    let behance = document.body.getElementsByTagName('i')[7];
    behance.className = content[25].behance_icon;

    let rights = document.body.getElementsByTagName('p')[6];
    rights.textContent = content[26].rights_message;

    let mob_Menu = document.body.getElementsByTagName('span')[0];
    mob_Menu.className = content[27].mob_menu;

    let mob_Menu_close = document.body.getElementsByTagName('span')[1];
    mob_Menu_close.className = content[28].mob_menu_close;
}


function openMobileMenu(){
    let mobMenu = document.body.getElementsByClassName("top-nav")[0];
    mobMenu.style.left = "0";
}

function closeMobileMenu(){
    let mobMenu = document.body.getElementsByClassName("top-nav")[0];
    mobMenu.style.left = "-25em";
}
