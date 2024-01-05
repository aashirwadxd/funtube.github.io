      function openVideoModal(videoId) {
            document.getElementById('videoModal').style.display = 'flex';
            document.querySelector('#videoModal iframe').src = `https://www.youtube.com/embed/${videoId}`;
        }

        function closeVideoModal() {
            document.getElementById('videoModal').style.display = 'none';
            document.querySelector('#videoModal iframe').src = '';
        }