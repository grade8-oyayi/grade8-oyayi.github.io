var i_home = (function(){var f = {};

    f.initialize = function(){

        jayui.dcl(jayui.main_area);
        
        //Create DIVS
        jayui.des("DIV","i_home_div",jayui.main_area);
        jayui.des("DIV","i_home_div_1","i_home_div");
        jayui.des("DIV","i_home_div_2","i_home_div");


        //Interfaces
        interface_header("i_home_div_1");
        interface_las("i_home_div_2");
    };

//======================================================================================================= //
//                                                                                                        //
//======================================================================================================= //

    function interface_header(div_area){

        jayui.dec("IMG","i_home_image1","",div_area);
        jayui.dat("i_home_image1","src","./Client/Media/G8-OYAYI-LOGO.jpg");
        jayui.dec("P","i_home_txt1","GRADE 8 - OYAYI",div_area);
        jayui.des("DIV","i_home_section1",div_area);
        jayui.dec("P","i_home_txt2","Official Website",div_area);


    };

    function interface_las(div_area){

        jayui.dec("P","i_home_txt3","Download Learner's Activty Sheets Below!",div_area);

        //CREATE ENEMY BATTLEFIELD
        jayui.des("TABLE","i_home_las_table_download",div_area);
        var box_count = -1;
        var box_id = ["ARPA","ENGLISH","ESP","FILIPINO","MAPEH","MATH","SCIENCE","TLE"];
        create_battlefield_row(4);
        //
        function create_battlefield_row(row){
            var r = 0;
            for(;r <= row - 1;r++){
                jayui.des("TR","i_home_las_table_download_tr"+r,"i_home_las_table_download");
                create_battlefield_column("i_home_las_table_download_tr",r,2);
            };
        };
        
        function create_battlefield_column(row_tag,row_id,column){
            var td_id;
            var c_attach = "";
            var c = 0;
            for(;c <= column - 1;c++){
                box_count++;
                td_id = jayfunc.concat_list([row_id,c]);
                c_attach = jayfunc.concat_list([row_tag,row_id]);
                jayui.des("TD","i_home_las_table_download_td"+td_id,c_attach);
                jayui.des("DIV","i_home_las_table_download_cell_"+box_id[box_count],"i_home_las_table_download_td"+td_id);
                jayui.dat("i_home_las_table_download_cell_"+box_id[box_count],"class","i_home_las_table_download_cells");
                jayui.def("BUTTON","i_home_las_unit_button_"+box_id[box_count],box_id[box_count],"i_home_las_table_download_cell_"+box_id[box_count],"onclick","i_home.download('" + box_id[box_count] + "');");
                jayui.dat("i_home_las_unit_button_"+box_id[box_count],"class","i_home_las_unit_buttons");
            };
        };

        f.download = function(id){

            jayui.dcl(jayui.main_area);

            //Create DIVS
            jayui.des("DIV","i_home_div",jayui.main_area);

            jayui.dec("P","i_home_download_txt1",id,"i_home_div");

            if(id !== "SCIENCE" && id !== "TLE"){
                jayui.def("BUTTON","i_home_download_button1","DOWNLOAD WEEK 1","i_home_div","onclick","i_home.download_specific_week('" + id + "',1);");
                jayui.def("BUTTON","i_home_download_button1","DOWNLOAD WEEK 2","i_home_div","onclick","i_home.download_specific_week('" + id + "',2);");
            }else {
                jayui.def("BUTTON","i_home_download_button1","DOWNLOAD WEEK 1 AND 2","i_home_div","onclick","i_home.download_specific_week('" + id + "',1);");
            }
            
            jayui.def("BUTTON","i_home_download_button2","CLOSE","i_home_div","onclick","i_home.initialize();");
            

        };

        f.download_specific_week = function(id,week){
            
            jayui.dcl(jayui.main_area);
            jayui.des("DIV","i_home_div_specific",jayui.main_area);
            jayui.def("BUTTON","i_home_specificdownload_button1","GO BACK","i_home_div_specific","onclick","i_home.download('"+id+"');");
            jayui.dec("P","i_home_specificdownload_txt1","CLICK THE LINK BELOW TO DOWNLOAD","i_home_div_specific");


            switch(id){

                case "ARPA":

                    if(week === 1){

                        for(var x = 1; x <=6; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/A.P-8-LAS-Week-1_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
    

                    }else if(week === 2){

                        for(var x = 1; x <= 8; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/A.P-8-LAS-Week-2_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
    

                    };

                
                break;

                case "ENGLISH":

                    if(week === 1){

                        for(var x = 1; x <=3; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/ENGLISH 8 week 1_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
    

                    }else if(week === 2){

                        for(var x = 1; x <= 9; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/ENGLISH 8 week 2_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
    

                    };

                
                break;

                case "ESP":

                    if(week === 1){

                        for(var x = 1; x <= 4; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/G8-LAS-ESP-1stQ-Week-1_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
    

                    }else if(week === 2){

                        for(var x = 1; x <= 5; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/G8-LAS-ESP-1stQ-Week-2_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };

                        
                        for(var y = 1; y <= 13; y++){

                            jayui.des("A","i_home_link_handout"+y,"i_home_div_specific");
                            jayui.dat("i_home_link_handout"+y,"class","i_home_links_handout");
                            var link = document.getElementById("i_home_link_handout"+y);
                            link.innerHTML = "G8_"+id+"_LAS_Handout_Wk"+week+"_Page_"+jayfunc.generate_number(y)+".jpg";
                            link.href = "./Client/Media/"+id+"/esp-week-2-hand-out_Page_"+jayfunc.generate_number(y)+".jpg";
                            link.download = "G8_"+id+"_LAS_Handout_Wk"+week+"_Page_"+jayfunc.generate_number(y)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
                        
    

                    };

                
                break;

                case "FILIPINO":

                    if(week === 1){

                        for(var x = 1; x <= 15; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/LAS_KARUNUNGANG-BAYAN_FIL-8-WK_1-printing_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
    

                    }else if(week === 2){

                        for(var x = 1; x <= 13; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/LAS_KARUNUNGANG-BAYAN_WK_2-printing_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
    

                    };

                
                break;

                case "MAPEH":

                    if(week === 1){

                        for(var x = 1; x <= 9; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/LAS-Music-8-week-1_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };

                        for(var x = 1; x <= 4; x++){

                            jayui.des("A","i_home_link_handout"+x,"i_home_div_specific");
                            jayui.dat("i_home_link_handout"+y,"class","i_home_links_handout");
                            var link = document.getElementById("i_home_link_handout"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Handout_Music_Wk"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/HANDOUT-MUSIC-Q1_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Handout_Music_Wk"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };


    

                    }else if(week === 2){

                        for(var x = 1; x <= 6; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/LAS-ARTS-8-WEEK-2_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };

                        for(var x = 1; x <= 3; x++){

                            jayui.des("A","i_home_link_handout"+x,"i_home_div_specific");
                            jayui.dat("i_home_link_handout"+x,"class","i_home_links_handout");
                            var link = document.getElementById("i_home_link_handout"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Handout_Arts_Wk"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/arts-handout-q1-souteast-asian-arts_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Handout_Arts_Wk"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };
    

                    };

                
                break;

                case "MATH":

                    if(week === 1){

                        for(var x = 1; x <= 8; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/Grade-8-LAS_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Week"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };

                        for(var x = 1; x <= 5; x++){

                            jayui.des("A","i_home_link_handout"+x,"i_home_div_specific");
                            jayui.dat("i_home_link_handout"+x,"class","i_home_links_handout");
                            var link = document.getElementById("i_home_link_handout"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Handout_Wk"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/handouts_Page_"+x+".jpg";
                            link.download = "G8_"+id+"_LAS_Handout_Wk"+week+"_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };

                    }

                
                break;

                case "SCIENCE":

                    if(week === 1){

                        for(var x = 1; x <= 11; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week_1-2_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/Science-8-LASQ1_W1-2_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.download = "G8_"+id+"_LAS_Week_1-2_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };

                    
                    };

                
                break;

                case "TLE":

                    if(week === 1){

                        for(var x = 1; x <= 14; x++){

                            jayui.des("A","i_home_link"+x,"i_home_div_specific");
                            jayui.dat("i_home_link"+x,"class","i_home_links");
                            var link = document.getElementById("i_home_link"+x);
                            link.innerHTML = "G8_"+id+"_LAS_Week_1-2_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.href = "./Client/Media/"+id+"/LAS-Bread-and-Pastry-Week-1-2_Page_"+jayfunc.generate_number(x)+".jpg";
                            link.download = "G8_"+id+"_LAS_Week_1-2_Page_"+jayfunc.generate_number(x)+".jpg";
                            jayui.des("BR","",jayui.main_area);
    
                        };

                    
                    };

                
                break;
                

                default:break;
            };
            
            
        };


        


    };

   


return f;}());