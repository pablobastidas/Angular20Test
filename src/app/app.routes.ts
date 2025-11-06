import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { User } from './components/user/user';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';

export const routes: Routes = [
    {
        path:'admin',
        component:Admin
    },
    {
        path:'control-flow',
        component:ControlFlow
    },
    {
        path:'data-binding',
        component:DataBinding
    },
    {
        path:'signal',
        component:SignalEx
    },
    {
        path:'user',
        component:User
    },
    {
        path:'Attribute-Dir',
        component:AttDirective
    },
    {
        path:'GetApi',
        component:GetApi
    }
];
