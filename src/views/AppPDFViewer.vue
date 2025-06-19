<script setup>

const cvLink = '/resume_Larissa_Avila.pdf'
</script>
<template>
  <div class="mt-8 flex w-full">
    <iframe title="Resume PDF" width="100%" height="800px"
      :src="`/pdfjs-5.3.31-dist/web/viewer.html?file=/${cvLink}&zoom=150&navpanes=1`"></iframe>
  </div>
</template>
