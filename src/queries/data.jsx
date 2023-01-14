import { getBaseurl } from "../helpers/shared";
import axios from "axios";

export const fetchTransactions = () => {
  return axios.get(`${getBaseurl()}/transactions.json`);
};

export const fetchTeams = () => {
  return axios.get(`${getBaseurl()}/teams.json`);
};

export const fetchContacts = () => {
  return axios.get(`${getBaseurl()}/contacts.json`);
};

export const fetchInvoices = () => {
  return axios.get(`${getBaseurl()}/invoices.json`);
};

export const fetchBar = () => {
  return axios.get(`${getBaseurl()}/bar.json`);
};

export const fetchPie = () => {
  return axios.get(`${getBaseurl()}/pie.json`);
};

export const fetchLine = () => {
  return axios.get(`${getBaseurl()}/line.json`);
};

export const fetchGeography = () => {
  return axios.get(`${getBaseurl()}/geography.json`);
};

export const fetchGeoFeatures = () => {
  return axios.get(`${getBaseurl()}/geoFeatures.json`);
};
