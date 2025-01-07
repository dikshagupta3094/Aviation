<?php include 'header.php'?>
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
      referrerpolicy="no-referrer"
    />
  </head>
  <body>

    <!-- Fess structure table begin here -->
    <section class="flex items-center justify-center m-4 p-4">
      <div class="overflow-x-auto shadow-xl">
        <table
          class="w-full max-w-5xl border-collapse border border-gray-300 boxShadow rounded-lg overflow-hidden"
          id="fees"
        >
          <thead class="bg-blue-900 border border-black">
            <tr>
              <th
                class="border border-gray-300 p-4 text-lg font-semibold text-white"
              >
                S.No
              </th>
              <th
                class="border border-gray-300 p-4 text-lg font-semibold text-white"
              >
                Course Name
              </th>
              <th
                class="border border-gray-300 p-4 text-lg font-semibold text-white"
              >
                Fess Per Semester (Rs/-)
              </th>
              <th
                class="border border-gray-300 p-4 text-lg font-semibold text-white"
              >
                Seats
              </th>
              <th
                class="border border-gray-300 p-4 text-lg font-semibold text-white"
              >
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Table body  insert by javascript -->
          </tbody>
        </table>
      </div>
    </section>
    <!-- Fess structure table  ends here -->
    <script src="../src/scripts/fessStructre.js"></script>
    <?php include 'footer.php'?>
    
  </body>
</html>
