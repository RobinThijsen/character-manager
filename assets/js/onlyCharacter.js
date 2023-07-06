import { onlyCharactere } from "./async/request";

const id = (new URLSearchParams(window.location.search)).get('id');

onlyCharactere(id);