 /* Step 3b: Log information about previewPic (alt and src) */
  console.log("Alt text:", previewPic.alt);
  console.log("Source URL:", previewPic.src);

  /* Step 3c: Change the text of the element with the id 'image' */
  document.getElementById("image").innerHTML = previewPic.alt;

  /* Step 3e: Change the background image of the element with the id 'image' */
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  /* Step 4a: Update the background image back to the original value: url('') */
  document.getElementById("image").style.backgroundImage = "url('')";

  /* Step 4b: Update the text back to "Hover over an image below to display here." */
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}root@7a0db88a023c:/home/coder/project# 
