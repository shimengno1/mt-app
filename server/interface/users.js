import Router from 'koa-router';
import Redis from 'koa-redis';
import nodeMailer from 'nodemailer';
import User from '../dbs/models/users'
import Email from '../dbs/config';
import Passport from './utils/passport';
import axios from './utils/axios';