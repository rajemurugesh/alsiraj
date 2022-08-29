import React from react;

const Sidebar = () =>{
    return (
        <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
    <aside class="bd-sidebar">
      <div class="offcanvas-lg offcanvas-start" tabindex="-1" id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel">
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title" id="bdSidebarOffcanvasLabel">Browse docs</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdSidebar"></button>
        </div>
        </div>
        </aside>
        </div>  
    );
}

export default Sidebar;