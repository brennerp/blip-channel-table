const lookSymbol = `
    <i class="fas fa-eye symbol symbol--look" title="Example"></i>
`;

export const modalTrigger = `
    <button class="bp-btn bp-btn--text-only">
        <label for="example-modal-controller" class="modal-trigger">${lookSymbol}</label>
    </button>
`;

export const modalComponent = `
    <div id="example-modal" class="modal-container">
        <input class="modal-controller" id="example-modal-controller" type="checkbox" hidden>

        <div class="modal" aria-hidden="true" role="dialog">
            <label class="modal-overlay" for="example-modal-controller"></label>
            <div class="modal-dialog">
                <div class="modal-header">
                    <h1 class="modal-title"> Title </h1>
                </div>
                <div class="modal-body">
                    <p class="modal-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at eros maximus.
                    </p>
                    <img class="modal-image" src="" alt="Sample image" title="Sample image"></img>
                </div>
                <div class="modal-footer">
                    <div class="modal-buttons">
                        <button class="documentation-button bp-btn bp-btn--text-only bp-btn--blip-dark"> Ver documentação </button>
                        <button class="ok-button bp-btn bp-btn--text-only bp-btn--blip-dark">
                            <label for="example-modal-controller">
                                Entendi
                            </label>
                        </button>
                    </div>
                </div>
           </div>
        </div>
    </div>
`;
