MoonCalc Gear Web App v 1.3 
=============================

1. About MoonCalc Gear Web App project
----------------------------------------

    The Moon is one of the most enigmatic and mystical planets of the Solar system.
    Change of phases of the Moon exerts impact on events which take place in the world, 
    on behavior of people, their feelings.

    A.V.T. Software (Sole Proprietorship Vita Tolstikova) presents MoonCalc Gear Web App
    for calculating and displaying Age of the Moon, Phase of the Moon, 
    and Distance from the Moon to the center of Earth. 
    For residents of the Northern Hemisphere, the Southern Hemisphere, and Equator. 
    
    MoonCalc Mobile Web App uses the W3C Geolocation API (GeoIP). 
    
    The technology of responsive design was used when creating the user interface.
	
    When developing the MoonCalc Gear Web App for Samsung Gear 2 device, our team 
    have been completely revamped design, functionality and mathematical model 
    of the Web App taking into account specific features of the Samsung Gear 2 device. 
    For example, when displaying the current Phase of the Moon instead of the bitmap image 
    on the HTML 5 Canvas formed a vector image. What, in our opinion, is more consistent 
    with the style of design the Samsung Gear 2 device.

    The MoonCalc Gear Web App was designed for educational and cognitive purposes.
	
    In July 2014 the MoonCalc Gear Web App v1.0 was a participant of the international competition 
    Samsung Gear App Challenge ( https://devpost.com/software/moon-calc )

    In August 2017 the A.V.T. Software team ( https://software.avt.dn.ua )
    has made a decision to publish the MoonCalc Gear Web App on GitHub 
    as an open source project.
    
    In honor of the 15th Anniversary of A.V.T. Company ( https://avt.dn.ua ).


2. Using MoonCalc Gear Web App
---------------------------------
    
    2.1 When the index.html file is opened in the browser, the user needs 
        to allow the Web App to determine the current user location 
        in order to correctly display Age of the Moon, Phase of the Moon, 
        and Distance from the Moon to the center of Earth. 
        For residents of the Northern Hemisphere, the Southern Hemisphere, and Equator.
    
    2.2 In the current release you can calculate the Moon parameters not only for the current time, 
        but for the past and future days. The "Now" button can always go back to the calculation 
        the Moon parameters for the current time. For the four main Phases of the Moon (New Moon, 
        First Quarter, Full Moon, Last Quarter) displays their names.
		
    2.3 The "About" button (right in the header) opens the page with information about MoonCalc Gear Web App.
            The "Back" button (right in the header) returns to the previous (Main) page.
		
    2.4. The "User Agreement" button on the "About" page opens the page with User Agreement information.
	
3. Compatibility
-----------------		
	
	3.1 The MoonCalc Gear Web App has been successfully tested in the following desktop 
            browsers:
            - FireFox v 55.0.2
            - Google Chrome v 60.0.3112.113
            - Microsoft Edge v 40.15063.0.0
    
        3.2 The MoonCalc Mobile Web App has been successfully tested with the following 
            screen resolutions (from 320x480 to 1680x1050) with different screen orientations (portrait and landscape).
		
	3.3 Note: Initially, MoonCalc Gear Web App (v1.0) was designed as a standalone type Web App for the Samsung Gear 2 device. 
            The Web App did not determine the user's location. The Age and Phase of the Moon were calculated and displayed 
            only for the Northern Hemisphere. All information was displayed on the screen with the resolution of 320x320 pixels.



4. Used web technologies, libraries and frameworks
--------------------------------------------------
    4.1 HTML5 + HTML5 Canvas
    4.2 CSS3
    4.3 JavaScript
    4.4 jQuery JavaScript Library v1.9.1 http://jquery.com/ by John Resig
    4.5 TAU ( Tizen Advanced UI ) Web UI library v0.9.4, Copyright (c) 2013 Samsung Electronics Co., Ltd.
    4.6 W3C Geolocation API library (https://www.w3.org/TR/geolocation-API/) by the W3C

	
5. Release notes for MoonCalc Gear Web App
------------------------------------------
	
    v1.3
        The current open source version for publish on GitHub.
        New features/enhancements & bug-fixes:
            - Add the W3C Geolocation API (GeoIP) to determine the current user location.
            - Enhance calculating and displaying Age of the Moon, Phase of the Moon, 
                and Distance from the Moon to the center of Earth. 
                For residents of the Northern Hemisphere, the Southern Hemisphere, and Equator.
            - Add User Agreement page.

    v1.0
        The current version use the standalone type. Therefore, not required a general host application, and can operate independently.
        The Web App did not determine the user's location. The Age and Phase of the Moon were calculated and displayed 
        only for the Northern Hemisphere. All information was displayed on the screen with the resolution of 320x320 pixels.
		

