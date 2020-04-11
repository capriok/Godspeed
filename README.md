# Godspeed

React Component Library  

//NAVABR  
import Navbar from 'godspeed/build/Navbar'  
[ children: el || title(required): string || height: string px || logo: img || shadow || inv ]  
import NavLink from 'godspeed/build/NavLink'  
[ text(required): string || to: string ]  

//CARD  
import Card from 'godspeed/build/Card'  
[ children: el || bg: string || color: string || border: string color || padding: string px || radius: string px ]  

//BUTTON  
import Button from 'godspeed/build/Button'  
[ text(required): string || to: string || bg: string px || color: string || clear || disabled || shadow ]

//MENU (SHITTY, DONT USE)  
import Menu from 'godspeed/build/Menu'  
[ children: el || text: string || bg: string px || color: string || open: bool || clear || disabled || gap ]  
import MenuItem from 'godspeed/build/MenuItem'  
[ children: el ]  

//INPUT  
import Input from 'godspeed/build/Input'  
[ children: el || onChange || value || type: string || placeholder: string || color: string || autoFocus || error || shadow || underlined || disabled ]  

//DRAWER  
import Drawer from 'godspeed/build/Drawer'  
[ children: el || onClick || open: bool || bg: string || color: string || padding: string px ]  

//MODAL  
import Modals from 'godspeed/build/Modal'  
[ children: el || onClick || open: bool || bg: string || color: string || border: string color || padding: string px || radius: string px || error ]  

DRAWER AND MODAL MUST BE AT ROOT FOR POSITIONING TO WORK