import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

services:any[]=[
  
    {
      color: "lightblue",
      mgb: "25px",
      pb: "30px",
      heading: "Basic Quran Reading / Recitation",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      color: "lightgreen",
      mgb: "25px",
      pb: "30px",
      heading: "Recitation with Tajweed",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  
    },
    {
      color: "coral",
      mgb: "25px",
      pb: "30px",
      heading: "Quran Memorization",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  
    },
    {
      color: "lemonchiffon",
      mgb: "25px",
      pb: "30px",
      heading: "Quran Translation",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      color: "lightgreen",
      mgb: "25px",
      pb: "30px",
      heading: "Islamic Studies / Concepts",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      color: "lightblue",
      mgb: "25px",
      pb: "30px",
      heading: "Quran Courses for Kids",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      color: "lemonchiffon",
      mgb: "25px",
      pb: "30px",
      heading: "Hadith Classes",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      color: "coral",
      mgb: "25px",
      pb: "30px",
      heading: "Flexible Timings",
      para: "The courses are scheduled according to the convenience of the students, so that learning the Quran can easily be adjusted according to their daily routine without any hassle."
    }
]

    about:any[]=[
      {
        heading: "Learn Quran Online",
        para: "QuranInn is an independent / non-partisan virtual institution / firm / establishment / body that aims at providing / imparting islamic education to seekers across the globe. Our teacher with years of experience and noble accolades, deliver teachings of Quran and islam to all age groups without gender discrimination. We offer online / virtual courses / classes / live interactive sessions for students / learners who find it difficult to join / take in-person classes. Our virtual school / institute brings efficient Quran learning / Islam learning right to your home and the students have the freedom to juggle their careers and school without being tied to a fixed schedule / with scheduling flexibility. With a comfortable learning environment and more individual attention, we offer multiple courses for aspirants to choose from."
      }
    ]

    footer: any[]=[
      {
        heading: "QuranInn Academy",
        para: "QuranInn Academy is an online institution that aims at providing islamic education to seekers across the globe. We offer online one-on-one interactive sessions for students willing to learn and read Qur'an. Our teacher with years of experience and noble accolades, deliver teachings of Qur’an and islam to all age groups."
      }
    ]

    packages: any[]=
    [
      {
        color: "red",
        heading1: "3 DAYS PER WEEK",
        heading2: "PLAN A",
        price: "Contact for Price",
        description: 
        [
          "3 Lessons Per Week", "6 hrs Per Month", "30 mins LIVE Lessons", "100% Money Back Gaurantee"
        ]
      },
      {
        color: "blue",
        heading1: "4 DAYS PER WEEK",
        heading2: "PLAN B",
        price:"Contact for Price",
        description:
        [
          "4 Lessons Per Week","8 hrs Per Month","30 mins LIVE Lessons","100% Money Back Gaurantee"
        ]
      },
      {
        color: "purple",
        colorp: "green",
        heading1: "5 DAYS PER WEEK",
        heading2: "PLAN C",
        price:"Contact for Price",
        description: 
        [
          "5 Lessons Per Week","10 hrs Per Month","30 mins LIVE Lessons","100% Money Back Guarantee"
        ]
      },
      {
        color: "orange",
        heading1: "3 DAYS PER WEEK",
        heading2: "PLAN D",
        price:"Contact for Price",
        description:
        [
          "3 Lessons Per Week","12 hrs Per Month","60 mins LIVE Lessons","100% Money Back Gaurantee"
        ]
      }
    ]
    contact:any[]=
    [
      {
        phoneLink: "tel:447472702244",
        whatsappLink: "https://api.whatsapp.com/send?phone=447472702244",
        emailLink: "mailto:quraninn@gmail.com",
        phone: "+44 7472 702 244",
        whatsapp: "+44 7472 702 244",
        email: "quraninn@gmail.com",
        instagram: "http://www.instagram.com/",
        facebook: "http://www.facebook.com/",
        skype: "http://www.skype.com/",
        twitter: "http://www.twitter.com/",
      }
    ]
    public getContact():any{
      return this.contact
    }
    public getServices():any{
      return this.services
    }
    public getAbout():any {
        return this.about
    }
    public getFooter():any{
      return this.footer
    }
    public getPackages():any{
      return this.packages
    }

  constructor() { }

}