import md5 from 'md5';

const gravatar = (email) => {
 const base = 'https://gravatar.com/avatar/';
 const formatteEmail = (email).trim().toLowerCase(),// quita espacios y pasa a minuscula
 const hash = md5(formatteEmail,{encoding:"binary"})// transforma los @ a aglo ams binario
return `${base} ${hash}`
}