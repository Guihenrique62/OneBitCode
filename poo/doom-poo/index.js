import { Component } from "./Component.js";
import { Form } from "./form.js";
import { Input } from "./input";
import { Label } from "./Label.js";

const title = new Component('h1', 'body',{textContent: 'Olá Mundo'})
console.log(title)
title.render()