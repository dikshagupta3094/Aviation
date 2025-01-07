<?php include 'header.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Satham</title>
  <link rel="stylesheet" href="../src/style/output.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
</head>

<body>

  <!-- Syllabus Download code begin here -->
  <section class="flex items-center justify-center m-4 p-4">
    <div class="overflow-x-auto shadow-xl">
      <table
        class="w-full max-w-5xl border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden"
        id="syllabus">
        <thead class="bg-blue-950">
          <tr>
            <th
              class="border border-gray-300 p-4 text-lg font-semibold text-white">
              Course Name
            </th>
            <th
              class="border border-gray-300 p-4 text-lg font-semibold text-white">
              Download Complete Syllabus
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Rows will be injected by JavaScript -->
        </tbody>
      </table>
    </div>
  </section>
  <!-- Syllabus Download code ends here -->

  <?php include 'footer.php' ?>
  <script src="../src/scripts/syllabus.js"></script>
</body>

</html>