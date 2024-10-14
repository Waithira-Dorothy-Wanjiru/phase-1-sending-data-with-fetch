
async function submitData(name, email) {
    const url = 'http://localhost:3000/users';
  
    const data = {
      name: name,
      email: email
    };
  
    try {
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
 
      if (response.ok) {
        const json = await response.json();
      
        document.body.innerHTML += `<p>User ID: ${json.id}</p>`;
      } else {
       
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {

      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    }
  }
  
  
  