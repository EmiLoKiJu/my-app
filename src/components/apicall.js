const category = 'anger';

const getdata = async () => {
  const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
    headers: {
      'X-Api-Key': 'Fw08AILtO+Qt2bR7wENuqQ==K7dKDmbDUGlMhbEh',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export default getdata;
