import{c as n,g as d,j as t,h as i}from"./index-4YOdIoGx.js";import{u,a as c}from"./use-dark-B44Zscxq.js";import{a as m}from"./use-router-link-Do_XFZjw.js";const g=["ul","ol"],v=n({name:"QList",props:{...u,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const s=d(),r=c(e,s.proxy.$q),o=t(()=>g.includes(e.tag)?null:"list"),l=t(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>i(e.tag,{class:l.value,role:o.value},m(a.default))}});export{v as Q};
