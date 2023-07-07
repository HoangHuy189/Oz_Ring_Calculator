//disable unused input
document.querySelector('#ringname').onchange = () =>
{
    let ringname = document.querySelector('#ringname').value;
    if (ringname === 'Ring of Restraint')
    {   
        document.querySelector('#att').disabled = false;
        document.querySelector('#attwep').disabled = true;
        document.querySelector('#primaryps').disabled = true;
        document.querySelector('#primary').disabled = true;
        document.querySelector('#secondary').disabled = true;
        document.querySelector('#level').disabled = true;
        document.querySelector('#critdmg').disabled = true;
        document.querySelector('#totalstat').disabled = true;
        
    }
    else if (ringname === 'Weapon Jump')
    {
        document.querySelector('#att').disabled = true;
        document.querySelector('#attwep').disabled = false;
        document.querySelector('#primaryps').disabled = false;
        document.querySelector('#primary').disabled = false;
        document.querySelector('#secondary').disabled = false;
        document.querySelector('#level').disabled = true;
        document.querySelector('#critdmg').disabled = true;
        document.querySelector('#totalstat').disabled = true;
    }
    else if (ringname === 'Level Jump')
    {
        document.querySelector('#att').disabled = true;
        document.querySelector('#attwep').disabled = true;
        document.querySelector('#primaryps').disabled = false;
        document.querySelector('#primary').disabled = false;
        document.querySelector('#secondary').disabled = false;
        document.querySelector('#level').disabled = false;
        document.querySelector('#critdmg').disabled = true;
        document.querySelector('#totalstat').disabled = true;
    }
    else if (ringname === 'Critical Damage')
    {
        document.querySelector('#att').disabled = true;
        document.querySelector('#attwep').disabled = true;
        document.querySelector('#primaryps').disabled = true;
        document.querySelector('#primary').disabled = true;
        document.querySelector('#secondary').disabled = true;
        document.querySelector('#level').disabled = true;
        document.querySelector('#critdmg').disabled = false;
        document.querySelector('#totalstat').disabled = true;
    }
    else if (ringname === 'Totalling Ring')
    {
        document.querySelector('#att').disabled = true;
        document.querySelector('#attwep').disabled = true;
        document.querySelector('#primaryps').disabled = false;
        document.querySelector('#primary').disabled = false;
        document.querySelector('#secondary').disabled = false;
        document.querySelector('#level').disabled = true;
        document.querySelector('#critdmg').disabled = true;
        document.querySelector('#totalstat').disabled = false;
    }
    
}




// Calculate the damage increase and print out 
document.querySelector('#calculate').onclick = () => {

    let ringname = document.querySelector('#ringname').value;

    let ringlevel = parseInt(document.querySelector('#ringlevel').value);

    let att = parseInt(document.querySelector('#att').value);

    let attwep = parseInt(document.querySelector('#attwep').value);

    let primaryps = parseInt(document.querySelector('#primaryps').value);

    let primary = parseInt(document.querySelector('#primary').value);

    let secondary = parseInt(document.querySelector('#secondary').value);

    let level = parseInt(document.querySelector('#level').value);

    let critdmg = parseInt(document.querySelector('#critdmg').value);
    
    let totalstat = parseInt(document.querySelector('#totalstat').value);

    if (ringname === 'Ring of Restraint')
    {    
        result = (ringlevel * 25) / (att+100) *100;

    }

    else if (ringname === 'Weapon Jump')
    {
        result = (attwep * ringlevel * (primaryps + 100) * 4)/((primary * 4) + secondary);

    }

    else if (ringname === 'Level Jump')
    {
        result = (level * (20 + 70 *ringlevel)/100 * (primaryps + 100) *4)/ ((primary * 4) + secondary);
    }

    else if (ringname === 'Critical Damage')
    {
        result = (ringlevel * 7) / (100 + critdmg) * 100;
    }
    
    else if (ringname === 'Totalling Ring')
    {
        if (ringlevel == '1' || ringlevel == '2')
        {
            result = (totalstat /100 * (primaryps +100) *4)/((primary * 4) + secondary);
        }
        else if (ringlevel == '3' || ringlevel == '4')
        {
            result = (totalstat /100 *2 * (primaryps +100) *4 )/((primary * 4) + secondary);
        }
    }
    result = parseFloat(result).toFixed(2);
    document.querySelector('#result').innerHTML = `${ringname} ${ringlevel} give you ${result}% final damage`;
}

//enable tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))