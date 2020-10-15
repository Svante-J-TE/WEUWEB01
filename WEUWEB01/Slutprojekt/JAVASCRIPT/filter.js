function showWantedCategory(n){
                document.getElementById("cars").classList.remove("active");
                document.getElementById("music").classList.remove("active");
                document.getElementById("shoes").classList.remove("active");
                document.getElementById("games").classList.remove("active");
                document.getElementById("all").classList.remove("active");

                document.getElementById("carArticleOne").classList.remove("unwanted");
                document.getElementById("carArticleTwo").classList.remove("unwanted");
                document.getElementById("carArticleThree").classList.remove("unwanted");
                document.getElementById("carArticleFour").classList.remove("unwanted");

                document.getElementById("musicArticleOne").classList.remove("unwanted");
                document.getElementById("musicArticleTwo").classList.remove("unwanted");
                document.getElementById("musicArticleThree").classList.remove("unwanted");
                document.getElementById("musicArticleFour").classList.remove("unwanted");

                document.getElementById("shoeArticleOne").classList.remove("unwanted");
                document.getElementById("shoeArticleTwo").classList.remove("unwanted");
                document.getElementById("shoeArticleThree").classList.remove("unwanted");
                document.getElementById("shoeArticleFour").classList.remove("unwanted");

                document.getElementById("gameArticleOne").classList.remove("unwanted");
                document.getElementById("gameArticleTwo").classList.remove("unwanted");

                if(n === 1){
                    document.getElementById("cars").classList.add("active");

                    document.getElementById("gameArticleOne").classList.add("unwanted");
                    document.getElementById("gameArticleTwo").classList.add("unwanted");

                    document.getElementById("shoeArticleOne").classList.add("unwanted");
                    document.getElementById("shoeArticleTwo").classList.add("unwanted");
                    document.getElementById("shoeArticleThree").classList.add("unwanted");
                    document.getElementById("shoeArticleFour").classList.add("unwanted");

                    document.getElementById("musicArticleOne").classList.add("unwanted");
                    document.getElementById("musicArticleTwo").classList.add("unwanted");
                    document.getElementById("musicArticleThree").classList.add("unwanted");
                    document.getElementById("musicArticleFour").classList.add("unwanted");
                }
                if(n === 2){
                    document.getElementById("music").classList.add("active");

                    document.getElementById("gameArticleOne").classList.add("unwanted");
                    document.getElementById("gameArticleTwo").classList.add("unwanted");

                    document.getElementById("shoeArticleOne").classList.add("unwanted");
                    document.getElementById("shoeArticleTwo").classList.add("unwanted");
                    document.getElementById("shoeArticleThree").classList.add("unwanted");
                    document.getElementById("shoeArticleFour").classList.add("unwanted");

                    document.getElementById("carArticleOne").classList.add("unwanted");
                    document.getElementById("carArticleTwo").classList.add("unwanted");
                    document.getElementById("carArticleThree").classList.add("unwanted");
                    document.getElementById("carArticleFour").classList.add("unwanted");

                }
                if(n === 3){
                    document.getElementById("shoes").classList.add("active");

                    document.getElementById("gameArticleOne").classList.add("unwanted");
                    document.getElementById("gameArticleTwo").classList.add("unwanted");

                    document.getElementById("carArticleOne").classList.add("unwanted");
                    document.getElementById("carArticleTwo").classList.add("unwanted");
                    document.getElementById("carArticleThree").classList.add("unwanted");
                    document.getElementById("carArticleFour").classList.add("unwanted");

                    document.getElementById("musicArticleOne").classList.add("unwanted");
                    document.getElementById("musicArticleTwo").classList.add("unwanted");
                    document.getElementById("musicArticleThree").classList.add("unwanted");
                    document.getElementById("musicArticleFour").classList.add("unwanted");
                }
                if(n === 4){
                    document.getElementById("games").classList.add("active");

                    document.getElementById("carArticleOne").classList.add("unwanted");
                    document.getElementById("carArticleTwo").classList.add("unwanted");
                    document.getElementById("carArticleThree").classList.add("unwanted");
                    document.getElementById("carArticleFour").classList.add("unwanted");

                    document.getElementById("musicArticleOne").classList.add("unwanted");
                    document.getElementById("musicArticleTwo").classList.add("unwanted");
                    document.getElementById("musicArticleThree").classList.add("unwanted");
                    document.getElementById("musicArticleFour").classList.add("unwanted");

                    document.getElementById("shoeArticleOne").classList.add("unwanted");
                    document.getElementById("shoeArticleTwo").classList.add("unwanted");
                    document.getElementById("shoeArticleThree").classList.add("unwanted");
                    document.getElementById("shoeArticleFour").classList.add("unwanted");


                }
                if(n === 5){
                    document.getElementById("all").classList.add("active");

                    document.getElementById("carArticleOne").classList.remove("unwanted");
                    document.getElementById("carArticleTwo").classList.remove("unwanted");
                    document.getElementById("carArticleThree").classList.remove("unwanted");
                    document.getElementById("carArticleFour").classList.remove("unwanted");

                    document.getElementById("musicArticleOne").classList.remove("unwanted");
                    document.getElementById("musicArticleTwo").classList.remove("unwanted");
                    document.getElementById("musicArticleThree").classList.remove("unwanted");
                    document.getElementById("musicArticleFour").classList.remove("unwanted");

                    document.getElementById("shoeArticleOne").classList.remove("unwanted");
                    document.getElementById("shoeArticleTwo").classList.remove("unwanted");
                    document.getElementById("shoeArticleThree").classList.remove("unwanted");
                    document.getElementById("shoeArticleFour").classList.remove("unwanted");

                    document.getElementById("gameArticleOne").classList.remove("unwanted");
                    document.getElementById("gameArticleTwo").classList.remove("unwanted");
                }
            }