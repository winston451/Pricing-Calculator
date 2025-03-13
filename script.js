// DOM Elements
const productCategorySelect = document.getElementById('product-category');
const optionsContainer = document.getElementById('options-container');
const priceBreakdown = document.getElementById('price-breakdown');
const priceValue = document.getElementById('price-value');

// State
let currentProduct = null;
let currentOptions = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Set up event listeners
    productCategorySelect.addEventListener('change', handleProductChange);

    // Initialize with empty selection
    updatePriceDisplay();
});

// Handle product category change
function handleProductChange() {
    const selectedValue = productCategorySelect.value;

    // Clear current options and price
    optionsContainer.innerHTML = '';
    currentOptions = {};

    if (!selectedValue) {
        updatePriceDisplay();
        return;
    }

    // Get the selected product data
    currentProduct = pricingData[selectedValue];

    // Generate options based on product type
    generateProductOptions(selectedValue);

    // Update price display
    updatePriceDisplay();
}

// Generate product-specific options
function generateProductOptions(productType) {
    switch (productType) {
        case 'business-cards':
            generateBusinessCardOptions();
            break;
        case 'flyers-invitations-small':
        case 'flyers-invitations-medium':
        case 'flyers-invitations-large':
            generateFlyersOptions(productType);
            break;
        case 'yard-signs':
            generateYardSignOptions();
            break;
        case 'posters':
            generatePosterOptions();
            break;
        case 'brochures':
            generateBrochureOptions();
            break;
        case 'menus':
            generateMenuOptions();
            break;
        case 'banners':
            generateBannerOptions();
            break;
        case 'tickets':
            generateTicketOptions();
            break;
        default:
            optionsContainer.innerHTML = '<p>Please select a product category</p>';
    }
}

// Generate options for business cards
function generateBusinessCardOptions() {
    // Quantity selection
    const quantityGroup = document.createElement('div');
    quantityGroup.className = 'option-group';

    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Quantity:';
    quantityGroup.appendChild(quantityLabel);

    const quantitySelect = document.createElement('select');
    quantitySelect.id = 'quantity';

    currentProduct.quantities.forEach(qty => {
        const option = document.createElement('option');
        option.value = qty;
        option.textContent = qty;
        quantitySelect.appendChild(option);
    });

    quantitySelect.addEventListener('change', () => {
        currentOptions.quantity = parseInt(quantitySelect.value);
        updatePriceDisplay();
    });

    quantityGroup.appendChild(quantitySelect);
    optionsContainer.appendChild(quantityGroup);

    // Sides selection
    const sidesGroup = document.createElement('div');
    sidesGroup.className = 'option-group';

    const sidesLabel = document.createElement('label');
    sidesLabel.textContent = 'Sides:';
    sidesGroup.appendChild(sidesLabel);

    const sidesRadioGroup = document.createElement('div');
    sidesRadioGroup.className = 'radio-group';

    // 1-sided option
    const oneSidedOption = document.createElement('div');
    oneSidedOption.className = 'radio-option';

    const oneSidedInput = document.createElement('input');
    oneSidedInput.type = 'radio';
    oneSidedInput.name = 'sides';
    oneSidedInput.id = 'one-sided';
    oneSidedInput.value = '1sided';
    oneSidedInput.checked = true;

    const oneSidedLabel = document.createElement('label');
    oneSidedLabel.htmlFor = 'one-sided';
    oneSidedLabel.textContent = '1-sided';

    oneSidedOption.appendChild(oneSidedInput);
    oneSidedOption.appendChild(oneSidedLabel);
    sidesRadioGroup.appendChild(oneSidedOption);

    // 2-sided option
    const twoSidedOption = document.createElement('div');
    twoSidedOption.className = 'radio-option';

    const twoSidedInput = document.createElement('input');
    twoSidedInput.type = 'radio';
    twoSidedInput.name = 'sides';
    twoSidedInput.id = 'two-sided';
    twoSidedInput.value = '2sided';

    const twoSidedLabel = document.createElement('label');
    twoSidedLabel.htmlFor = 'two-sided';
    twoSidedLabel.textContent = '2-sided';

    twoSidedOption.appendChild(twoSidedInput);
    twoSidedOption.appendChild(twoSidedLabel);
    sidesRadioGroup.appendChild(twoSidedOption);

    // Add event listeners for sides selection
    oneSidedInput.addEventListener('change', () => {
        if (oneSidedInput.checked) {
            currentOptions.sides = '1sided';
            updatePriceDisplay();
        }
    });

    twoSidedInput.addEventListener('change', () => {
        if (twoSidedInput.checked) {
            currentOptions.sides = '2sided';
            updatePriceDisplay();
        }
    });

    sidesGroup.appendChild(sidesRadioGroup);
    optionsContainer.appendChild(sidesGroup);

    // Reorder checkbox
    const reorderGroup = document.createElement('div');
    reorderGroup.className = 'option-group';

    const reorderCheckbox = document.createElement('input');
    reorderCheckbox.type = 'checkbox';
    reorderCheckbox.id = 'reorder';

    const reorderLabel = document.createElement('label');
    reorderLabel.htmlFor = 'reorder';
    reorderLabel.textContent = 'Reorder with no changes ($15.00 discount)';

    reorderCheckbox.addEventListener('change', () => {
        currentOptions.reorder = reorderCheckbox.checked;
        updatePriceDisplay();
    });

    reorderGroup.appendChild(reorderCheckbox);
    reorderGroup.appendChild(reorderLabel);
    optionsContainer.appendChild(reorderGroup);

    // Set initial values
    currentOptions.quantity = parseInt(quantitySelect.value);
    currentOptions.sides = '1sided';
    currentOptions.reorder = false;
}

// Generate options for flyers/invitations
function generateFlyersOptions(productType) {
    // Quantity selection
    const quantityGroup = document.createElement('div');
    quantityGroup.className = 'option-group';

    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Quantity:';
    quantityGroup.appendChild(quantityLabel);

    const quantitySelect = document.createElement('select');
    quantitySelect.id = 'quantity';

    currentProduct.quantities.forEach(qty => {
        const option = document.createElement('option');
        option.value = qty;
        option.textContent = qty;
        quantitySelect.appendChild(option);
    });

    quantitySelect.addEventListener('change', () => {
        currentOptions.quantity = parseInt(quantitySelect.value);
        updatePriceDisplay();
    });

    quantityGroup.appendChild(quantitySelect);
    optionsContainer.appendChild(quantityGroup);

    // Sides selection
    const sidesGroup = document.createElement('div');
    sidesGroup.className = 'option-group';

    const sidesLabel = document.createElement('label');
    sidesLabel.textContent = 'Sides:';
    sidesGroup.appendChild(sidesLabel);

    const sidesRadioGroup = document.createElement('div');
    sidesRadioGroup.className = 'radio-group';

    // 1-sided option
    const oneSidedOption = document.createElement('div');
    oneSidedOption.className = 'radio-option';

    const oneSidedInput = document.createElement('input');
    oneSidedInput.type = 'radio';
    oneSidedInput.name = 'sides';
    oneSidedInput.id = 'one-sided';
    oneSidedInput.value = '1sided';
    oneSidedInput.checked = true;

    const oneSidedLabel = document.createElement('label');
    oneSidedLabel.htmlFor = 'one-sided';
    oneSidedLabel.textContent = '1-sided';

    oneSidedOption.appendChild(oneSidedInput);
    oneSidedOption.appendChild(oneSidedLabel);
    sidesRadioGroup.appendChild(oneSidedOption);

    // 2-sided option
    const twoSidedOption = document.createElement('div');
    twoSidedOption.className = 'radio-option';

    const twoSidedInput = document.createElement('input');
    twoSidedInput.type = 'radio';
    twoSidedInput.name = 'sides';
    twoSidedInput.id = 'two-sided';
    twoSidedInput.value = '2sided';

    const twoSidedLabel = document.createElement('label');
    twoSidedLabel.htmlFor = 'two-sided';
    twoSidedLabel.textContent = '2-sided';

    twoSidedOption.appendChild(twoSidedInput);
    twoSidedOption.appendChild(twoSidedLabel);
    sidesRadioGroup.appendChild(twoSidedOption);

    // Add event listeners for sides selection
    oneSidedInput.addEventListener('change', () => {
        if (oneSidedInput.checked) {
            currentOptions.sides = '1sided';
            updatePriceDisplay();
        }
    });

    twoSidedInput.addEventListener('change', () => {
        if (twoSidedInput.checked) {
            currentOptions.sides = '2sided';
            updatePriceDisplay();
        }
    });

    sidesGroup.appendChild(sidesRadioGroup);
    optionsContainer.appendChild(sidesGroup);

    // Design service checkbox
    const designGroup = document.createElement('div');
    designGroup.className = 'option-group';

    const designCheckbox = document.createElement('input');
    designCheckbox.type = 'checkbox';
    designCheckbox.id = 'design-service';

    const designLabel = document.createElement('label');
    designLabel.htmlFor = 'design-service';
    designLabel.textContent = `Design Service ($${currentProduct.services.design.toFixed(2)})`;

    designCheckbox.addEventListener('change', () => {
        currentOptions.designService = designCheckbox.checked;
        updatePriceDisplay();
    });

    designGroup.appendChild(designCheckbox);
    designGroup.appendChild(designLabel);
    optionsContainer.appendChild(designGroup);

    // Add setup service if available
    if (currentProduct.services.setup) {
        const setupGroup = document.createElement('div');
        setupGroup.className = 'option-group';

        const setupCheckbox = document.createElement('input');
        setupCheckbox.type = 'checkbox';
        setupCheckbox.id = 'setup-service';

        const setupLabel = document.createElement('label');
        setupLabel.htmlFor = 'setup-service';
        setupLabel.textContent = `Setup Service ($${currentProduct.services.setup.toFixed(2)})`;

        setupCheckbox.addEventListener('change', () => {
            currentOptions.setupService = setupCheckbox.checked;
            updatePriceDisplay();
        });

        setupGroup.appendChild(setupCheckbox);
        setupGroup.appendChild(setupLabel);
        optionsContainer.appendChild(setupGroup);

        // Set initial value
        currentOptions.setupService = false;
    }

    // Set initial values
    currentOptions.quantity = parseInt(quantitySelect.value);
    currentOptions.sides = '1sided';
    currentOptions.designService = false;
}

// Generate options for yard signs
function generateYardSignOptions() {
    // Size selection
    const sizeGroup = document.createElement('div');
    sizeGroup.className = 'option-group';

    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Size:';
    sizeGroup.appendChild(sizeLabel);

    const sizeSelect = document.createElement('select');
    sizeSelect.id = 'size';

    const size18x24 = document.createElement('option');
    size18x24.value = '18x24';
    size18x24.textContent = '18x24';
    sizeSelect.appendChild(size18x24);

    const size8x24 = document.createElement('option');
    size8x24.value = '8x24-12x24';
    size8x24.textContent = '8x24 & 12x24';
    sizeSelect.appendChild(size8x24);

    sizeSelect.addEventListener('change', () => {
        currentOptions.size = sizeSelect.value;
        updatePriceDisplay();
    });

    sizeGroup.appendChild(sizeSelect);
    optionsContainer.appendChild(sizeGroup);

    // Quantity selection
    const quantityGroup = document.createElement('div');
    quantityGroup.className = 'option-group';

    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Quantity:';
    quantityGroup.appendChild(quantityLabel);

    const quantitySelect = document.createElement('select');
    quantitySelect.id = 'quantity';

    currentProduct.sizes['18x24'].quantities.forEach(qty => {
        const option = document.createElement('option');
        option.value = qty;
        option.textContent = qty;
        quantitySelect.appendChild(option);
    });

    quantitySelect.addEventListener('change', () => {
        currentOptions.quantity = parseInt(quantitySelect.value);
        updatePriceDisplay();
    });

    quantityGroup.appendChild(quantitySelect);
    optionsContainer.appendChild(quantityGroup);

    // Set initial values
    currentOptions.size = '18x24';
    currentOptions.quantity = 1;
}

// Generate options for posters
function generatePosterOptions() {
    // Poster type selection
    const typeGroup = document.createElement('div');
    typeGroup.className = 'option-group';

    const typeLabel = document.createElement('label');
    typeLabel.textContent = 'Poster Type:';
    typeGroup.appendChild(typeLabel);

    const typeSelect = document.createElement('select');
    typeSelect.id = 'poster-type';

    const types = [
        { value: 'express', label: 'Express Posters (Camera Ready)' },
        { value: 'standard-11x17', label: 'Standard 11x17' },
        { value: 'standard-12x18', label: 'Standard 12x18' },
        { value: 'standard-13x19', label: 'Standard 13x19' },
        { value: 'mounted', label: 'Mounted Posters' },
        { value: 'paper', label: 'Paper Posters' },
        { value: 'canvas', label: 'Canvas Prints' }
    ];

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type.value;
        option.textContent = type.label;
        typeSelect.appendChild(option);
    });

    typeSelect.addEventListener('change', () => {
        currentOptions.posterType = typeSelect.value;

        // Clear and regenerate size and quantity options based on poster type
        const sizeQuantityContainer = document.getElementById('size-quantity-container');
        if (sizeQuantityContainer) {
            sizeQuantityContainer.remove();
        }

        generatePosterSizeQuantityOptions(currentOptions.posterType);
        updatePriceDisplay();
    });

    typeGroup.appendChild(typeSelect);
    optionsContainer.appendChild(typeGroup);

    // Generate initial size and quantity options
    generatePosterSizeQuantityOptions('express');

    // Set initial values
    currentOptions.posterType = 'express';
    currentOptions.size = currentProduct.types.express.sizes[0];
    currentOptions.designService = false;
}

// Generate size and quantity options for posters based on type
function generatePosterSizeQuantityOptions(posterType) {
    const container = document.createElement('div');
    container.id = 'size-quantity-container';

    const posterData = currentProduct.types[posterType];

    if (posterType === 'express') {
        // Size selection for express posters
        const sizeGroup = document.createElement('div');
        sizeGroup.className = 'option-group';

        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = 'Size:';
        sizeGroup.appendChild(sizeLabel);

        const sizeSelect = document.createElement('select');
        sizeSelect.id = 'size';

        posterData.sizes.forEach((size, index) => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = `${size} (${posterData.stock[index]})`;
            sizeSelect.appendChild(option);
        });

        sizeSelect.addEventListener('change', () => {
            currentOptions.size = sizeSelect.value;
            updatePriceDisplay();
        });

        sizeGroup.appendChild(sizeSelect);
        container.appendChild(sizeGroup);

        // Quantity input for express posters
        const quantityGroup = document.createElement('div');
        quantityGroup.className = 'option-group';

        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = 'Quantity:';
        quantityGroup.appendChild(quantityLabel);

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.id = 'quantity';
        quantityInput.min = 1;
        quantityInput.value = 1;

        quantityInput.addEventListener('change', () => {
            currentOptions.quantity = parseInt(quantityInput.value);
            updatePriceDisplay();
        });

        quantityGroup.appendChild(quantityInput);
        container.appendChild(quantityGroup);

        // Set initial values
        currentOptions.size = posterData.sizes[0];
        currentOptions.quantity = 1;
    } else if (posterType.startsWith('standard-')) {
        // Quantity selection for standard posters
        const quantityGroup = document.createElement('div');
        quantityGroup.className = 'option-group';

        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = 'Quantity:';
        quantityGroup.appendChild(quantityLabel);

        const quantitySelect = document.createElement('select');
        quantitySelect.id = 'quantity';

        posterData.quantities.forEach(qty => {
            const option = document.createElement('option');
            option.value = qty;
            option.textContent = qty;
            quantitySelect.appendChild(option);
        });

        quantitySelect.addEventListener('change', () => {
            currentOptions.quantity = parseInt(quantitySelect.value);
            updatePriceDisplay();
        });

        quantityGroup.appendChild(quantitySelect);
        container.appendChild(quantityGroup);

        // Design service checkbox
        const designGroup = document.createElement('div');
        designGroup.className = 'option-group';

        const designCheckbox = document.createElement('input');
        designCheckbox.type = 'checkbox';
        designCheckbox.id = 'design-service';

        const designLabel = document.createElement('label');
        designLabel.htmlFor = 'design-service';
        designLabel.textContent = `Design Service ($${posterData.design.toFixed(2)})`;

        designCheckbox.addEventListener('change', () => {
            currentOptions.designService = designCheckbox.checked;
            updatePriceDisplay();
        });

        designGroup.appendChild(designCheckbox);
        designGroup.appendChild(designLabel);
        container.appendChild(designGroup);

        // Set initial values
        currentOptions.quantity = posterData.quantities[0];
        currentOptions.designService = false;
    } else if (posterType === 'mounted' || posterType === 'paper' || posterType === 'canvas') {
        // Size selection for mounted/paper/canvas posters
        const sizeGroup = document.createElement('div');
        sizeGroup.className = 'option-group';

        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = 'Size:';
        sizeGroup.appendChild(sizeLabel);

        const sizeSelect = document.createElement('select');
        sizeSelect.id = 'size';

        posterData.sizes.forEach((size, index) => {
            if (posterData.prices[index] !== null) {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                sizeSelect.appendChild(option);
            }
        });

        sizeSelect.addEventListener('change', () => {
            currentOptions.size = sizeSelect.value;
            updatePriceDisplay();
        });

        sizeGroup.appendChild(sizeSelect);
        container.appendChild(sizeGroup);

        // Design service checkbox if not included or canvas
        if (posterType !== 'canvas' && posterData.design !== 'Included in Prices') {
            const designGroup = document.createElement('div');
            designGroup.className = 'option-group';

            const designCheckbox = document.createElement('input');
            designCheckbox.type = 'checkbox';
            designCheckbox.id = 'design-service';

            const designLabel = document.createElement('label');
            designLabel.htmlFor = 'design-service';
            designLabel.textContent = `Design Service ($${posterData.design.toFixed(2)})`;

            designCheckbox.addEventListener('change', () => {
                currentOptions.designService = designCheckbox.checked;
                updatePriceDisplay();
            });

            designGroup.appendChild(designCheckbox);
            designGroup.appendChild(designLabel);
            container.appendChild(designGroup);

            // Set initial value
            currentOptions.designService = false;
        }

        // Set initial value
        currentOptions.size = posterData.sizes[0];
    }

    optionsContainer.appendChild(container);
}

// Generate options for brochures
function generateBrochureOptions() {
    // Brochure type selection
    const typeGroup = document.createElement('div');
    typeGroup.className = 'option-group';

    const typeLabel = document.createElement('label');
    typeLabel.textContent = 'Brochure Type:';
    typeGroup.appendChild(typeLabel);

    const typeSelect = document.createElement('select');
    typeSelect.id = 'brochure-type';

    const types = [
        { value: '8.5x11', label: '8.5x11 Tri-Fold' },
        { value: '11x17-2sided', label: '11x17 Tri-Fold (2-sided)' }
    ];

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type.value;
        option.textContent = type.label;
        typeSelect.appendChild(option);
    });

    typeSelect.addEventListener('change', () => {
        currentOptions.brochureType = typeSelect.value;
        updatePriceDisplay();
    });

    typeGroup.appendChild(typeSelect);
    optionsContainer.appendChild(typeGroup);

    // Quantity selection
    const quantityGroup = document.createElement('div');
    quantityGroup.className = 'option-group';

    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Quantity:';
    quantityGroup.appendChild(quantityLabel);

    const quantitySelect = document.createElement('select');
    quantitySelect.id = 'quantity';

    currentProduct.types['8.5x11'].quantities.forEach(qty => {
        const option = document.createElement('option');
        option.value = qty;
        option.textContent = qty;
        quantitySelect.appendChild(option);
    });

    quantitySelect.addEventListener('change', () => {
        currentOptions.quantity = parseInt(quantitySelect.value);
        updatePriceDisplay();
    });

    quantityGroup.appendChild(quantitySelect);
    optionsContainer.appendChild(quantityGroup);

    // Stock selection
    const stockGroup = document.createElement('div');
    stockGroup.className = 'option-group';

    const stockLabel = document.createElement('label');
    stockLabel.textContent = 'Stock:';
    stockGroup.appendChild(stockLabel);

    const stockSelect = document.createElement('select');
    stockSelect.id = 'stock';

    const stockOptions = ['Matte', 'Gloss'];

    stockOptions.forEach(stock => {
        const option = document.createElement('option');
        option.value = stock.toLowerCase();
        option.textContent = stock;
        stockSelect.appendChild(option);
    });

    stockSelect.addEventListener('change', () => {
        currentOptions.stock = stockSelect.value;
        updatePriceDisplay();
    });

    stockGroup.appendChild(stockSelect);
    optionsContainer.appendChild(stockGroup);

    // Design service checkbox
    const designGroup = document.createElement('div');
    designGroup.className = 'option-group';

    const designCheckbox = document.createElement('input');
    designCheckbox.type = 'checkbox';
    designCheckbox.id = 'design-service';

    const designLabel = document.createElement('label');
    designLabel.htmlFor = 'design-service';
    designLabel.textContent = `Design Service ($${currentProduct.types['8.5x11'].design.toFixed(2)})`;

    designCheckbox.addEventListener('change', () => {
        currentOptions.designService = designCheckbox.checked;
        updatePriceDisplay();
    });

    designGroup.appendChild(designCheckbox);
    designGroup.appendChild(designLabel);
    optionsContainer.appendChild(designGroup);

    // Set initial values
    currentOptions.brochureType = '8.5x11';
    currentOptions.quantity = currentProduct.types['8.5x11'].quantities[0];
    currentOptions.stock = 'matte';
    currentOptions.designService = false;
}

// Generate options for menus
function generateMenuOptions() {
    // Menu size selection
    const sizeGroup = document.createElement('div');
    sizeGroup.className = 'option-group';

    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Size:';
    sizeGroup.appendChild(sizeLabel);

    const sizeSelect = document.createElement('select');
    sizeSelect.id = 'menu-size';

    const sizes = [
        { value: '8.5x11', label: '8.5x11' },
        { value: '8.5x14', label: '8.5x14' },
        { value: '11x17', label: '11x17' }
    ];

    sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size.value;
        option.textContent = size.label;
        sizeSelect.appendChild(option);
    });

    sizeSelect.addEventListener('change', () => {
        currentOptions.menuSize = sizeSelect.value;

        // Update quantity options based on menu size
        const quantitySelect = document.getElementById('quantity');
        quantitySelect.innerHTML = '';

        currentProduct.types[currentOptions.menuSize].quantities.forEach(qty => {
            const option = document.createElement('option');
            option.value = qty;
            option.textContent = qty;
            quantitySelect.appendChild(option);
        });

        currentOptions.quantity = currentProduct.types[currentOptions.menuSize].quantities[0];
        updatePriceDisplay();
    });

    sizeGroup.appendChild(sizeSelect);
    optionsContainer.appendChild(sizeGroup);

    // Quantity selection
    const quantityGroup = document.createElement('div');
    quantityGroup.className = 'option-group';

    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Quantity:';
    quantityGroup.appendChild(quantityLabel);

    const quantitySelect = document.createElement('select');
    quantitySelect.id = 'quantity';

    currentProduct.types['8.5x11'].quantities.forEach(qty => {
        const option = document.createElement('option');
        option.value = qty;
        option.textContent = qty;
        quantitySelect.appendChild(option);
    });

    quantitySelect.addEventListener('change', () => {
        currentOptions.quantity = parseInt(quantitySelect.value);
        updatePriceDisplay();
    });

    quantityGroup.appendChild(quantitySelect);
    optionsContainer.appendChild(quantityGroup);

    // Design service checkbox
    const designGroup = document.createElement('div');
    designGroup.className = 'option-group';

    const designCheckbox = document.createElement('input');
    designCheckbox.type = 'checkbox';
    designCheckbox.id = 'design-service';

    const designLabel = document.createElement('label');
    designLabel.htmlFor = 'design-service';
    designLabel.textContent = `Design Service ($${currentProduct.types['8.5x11'].design.toFixed(2)})`;

    designCheckbox.addEventListener('change', () => {
        currentOptions.designService = designCheckbox.checked;
        updatePriceDisplay();
    });

    designGroup.appendChild(designCheckbox);
    designGroup.appendChild(designLabel);
    optionsContainer.appendChild(designGroup);

    // Set initial values
    currentOptions.menuSize = '8.5x11';
    currentOptions.quantity = currentProduct.types['8.5x11'].quantities[0];
    currentOptions.designService = false;
}

// Generate options for banners
function generateBannerOptions() {
    // Banner type selection
    const typeGroup = document.createElement('div');
    typeGroup.className = 'option-group';

    const typeLabel = document.createElement('label');
    typeLabel.textContent = 'Banner Type:';
    typeGroup.appendChild(typeLabel);

    const typeSelect = document.createElement('select');
    typeSelect.id = 'banner-type';

    const types = [
        { value: 'retractable-36x80', label: 'Retractable Banner 36x80 (Kit included)' },
        { value: 'retractable-33x80', label: 'Retractable Banner 33x80 (Kit included)' },
        { value: 'crossbow-23.5x62', label: 'Cross-Bow Banner 23.5x62' },
        { value: 'crossbow-79x30', label: 'Cross-Bow Banner 79x30' },
        { value: 'step-repeat-8x8', label: 'Standard 8x8 Step/Repeat Banner' },
        { value: 'step-repeat-8x8-pole', label: 'Standard 8x8 Step/Repeat Banner with Pole Pocket' },
        { value: 'standard-72x36', label: 'Standard 72x36 Banner' },
        { value: 'led-lightbox', label: 'LED Light Box (double-sided graphics)' }
    ];

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type.value;
        option.textContent = type.label;
        typeSelect.appendChild(option);
    });

    typeSelect.addEventListener('change', () => {
        currentOptions.bannerType = typeSelect.value;
        updatePriceDisplay();
    });

    typeGroup.appendChild(typeSelect);
    optionsContainer.appendChild(typeGroup);

    // Set initial values
    currentOptions.bannerType = 'retractable-36x80';
}

// Generate options for tickets
function generateTicketOptions() {
    // Ticket type selection
    const typeGroup = document.createElement('div');
    typeGroup.className = 'option-group';

    const typeLabel = document.createElement('label');
    typeLabel.textContent = 'Ticket Type:';
    typeGroup.appendChild(typeLabel);

    const typeSelect = document.createElement('select');
    typeSelect.id = 'ticket-type';

    const types = [
        { value: 'standard', label: 'Standard Tickets (1-sided Print Only)' },
        { value: 'raffle', label: 'Raffle Tickets (Perforated with Numbers)' }
    ];

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type.value;
        option.textContent = type.label;
        typeSelect.appendChild(option);
    });

    typeSelect.addEventListener('change', () => {
        currentOptions.ticketType = typeSelect.value;

        // Clear and regenerate quantity and color options based on ticket type
        const optionsContainer = document.getElementById('ticket-options-container');
        if (optionsContainer) {
            optionsContainer.remove();
        }

        generateTicketSpecificOptions(currentOptions.ticketType);
        updatePriceDisplay();
    });

    typeGroup.appendChild(typeSelect);
    optionsContainer.appendChild(typeGroup);

    // Generate initial options
    generateTicketSpecificOptions('standard');

    // Set initial values
    currentOptions.ticketType = 'standard';
}

// Generate specific options for ticket types
function generateTicketSpecificOptions(ticketType) {
    const container = document.createElement('div');
    container.id = 'ticket-options-container';

    const ticketData = currentProduct.types[ticketType];

    // Quantity selection
    const quantityGroup = document.createElement('div');
    quantityGroup.className = 'option-group';

    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Quantity:';
    quantityGroup.appendChild(quantityLabel);

    const quantitySelect = document.createElement('select');
    quantitySelect.id = 'quantity';

    ticketData.quantities.forEach(qty => {
        const option = document.createElement('option');
        option.value = qty;
        option.textContent = qty;
        quantitySelect.appendChild(option);
    });

    quantitySelect.addEventListener('change', () => {
        currentOptions.quantity = parseInt(quantitySelect.value);
        updatePriceDisplay();
    });

    quantityGroup.appendChild(quantitySelect);
    container.appendChild(quantityGroup);

    if (ticketType === 'standard') {
        // Design options for standard tickets
        const designGroup = document.createElement('div');
        designGroup.className = 'option-group';

        const designLabel = document.createElement('label');
        designLabel.textContent = 'Design Option:';
        designGroup.appendChild(designLabel);

        const designRadioGroup = document.createElement('div');
        designRadioGroup.className = 'radio-group';

        // Print ready option
        const printReadyOption = document.createElement('div');
        printReadyOption.className = 'radio-option';

        const printReadyInput = document.createElement('input');
        printReadyInput.type = 'radio';
        printReadyInput.name = 'design-option';
        printReadyInput.id = 'print-ready';
        printReadyInput.value = 'print-ready';
        printReadyInput.checked = true;

        const printReadyLabel = document.createElement('label');
        printReadyLabel.htmlFor = 'print-ready';
        printReadyLabel.textContent = 'Print Ready';

        printReadyOption.appendChild(printReadyInput);
        printReadyOption.appendChild(printReadyLabel);
        designRadioGroup.appendChild(printReadyOption);

        // Design + setup option
        const designSetupOption = document.createElement('div');
        designSetupOption.className = 'radio-option';

        const designSetupInput = document.createElement('input');
        designSetupInput.type = 'radio';
        designSetupInput.name = 'design-option';
        designSetupInput.id = 'design-setup';
        designSetupInput.value = 'design-setup';

        const designSetupLabel = document.createElement('label');
        designSetupLabel.htmlFor = 'design-setup';
        designSetupLabel.textContent = 'Design + Setup Included';

        designSetupOption.appendChild(designSetupInput);
        designSetupOption.appendChild(designSetupLabel);
        designRadioGroup.appendChild(designSetupOption);

        // Add event listeners for design option selection
        printReadyInput.addEventListener('change', () => {
            if (printReadyInput.checked) {
                currentOptions.designOption = 'print-ready';
                updatePriceDisplay();
            }
        });

        designSetupInput.addEventListener('change', () => {
            if (designSetupInput.checked) {
                currentOptions.designOption = 'design-setup';
                updatePriceDisplay();
            }
        });

        designGroup.appendChild(designRadioGroup);
        container.appendChild(designGroup);

        // Set initial value
        currentOptions.designOption = 'print-ready';
    } else if (ticketType === 'raffle') {
        // Color options for raffle tickets
        const colorGroup = document.createElement('div');
        colorGroup.className = 'option-group';

        const colorOptionLabel = document.createElement('label');
        colorOptionLabel.textContent = 'Color Option:';
        colorGroup.appendChild(colorOptionLabel);

        const colorRadioGroup = document.createElement('div');
        colorRadioGroup.className = 'radio-group';

        // Black & white option
        const bwOption = document.createElement('div');
        bwOption.className = 'radio-option';

        const bwInput = document.createElement('input');
        bwInput.type = 'radio';
        bwInput.name = 'color-option';
        bwInput.id = 'black-white';
        bwInput.value = 'black-white';
        bwInput.checked = true;

        const bwLabel = document.createElement('label');
        bwLabel.htmlFor = 'black-white';
        bwLabel.textContent = 'Black & White';

        bwOption.appendChild(bwInput);
        bwOption.appendChild(bwLabel);
        colorRadioGroup.appendChild(bwOption);

        // Color option
        const colorOption = document.createElement('div');
        colorOption.className = 'radio-option';

        const colorInput = document.createElement('input');
        colorInput.type = 'radio';
        colorInput.name = 'color-option';
        colorInput.id = 'color';
        colorInput.value = 'color';

        const colorOptionItemLabel = document.createElement('label');
        colorOptionItemLabel.htmlFor = 'color';
        colorOptionItemLabel.textContent = 'Color';

        colorOption.appendChild(colorInput);
        colorOption.appendChild(colorOptionItemLabel);
        colorRadioGroup.appendChild(colorOption);

        // Add event listeners for color option selection
        bwInput.addEventListener('change', () => {
            if (bwInput.checked) {
                currentOptions.colorOption = 'black-white';
                updatePriceDisplay();
            }
        });

        colorInput.addEventListener('change', () => {
            if (colorInput.checked) {
                currentOptions.colorOption = 'color';
                updatePriceDisplay();
            }
        });

        colorGroup.appendChild(colorRadioGroup);
        container.appendChild(colorGroup);

        // Set initial value
        currentOptions.colorOption = 'black-white';
    }

    // Set initial quantity
    currentOptions.quantity = ticketData.quantities[0];

    optionsContainer.appendChild(container);
}

// Update price display based on current options
function updatePriceDisplay() {
    // Clear previous price breakdown
    priceBreakdown.innerHTML = '';

    if (!currentProduct) {
        priceBreakdown.innerHTML = '<p>Select a product to see pricing</p>';
        priceValue.textContent = '$0.00';
        return;
    }

    let totalPrice = 0;
    const priceItems = [];

    // Calculate base price based on product type and options
    switch (productCategorySelect.value) {
        case 'business-cards':
            calculateBusinessCardPrice(priceItems);
            break;
        case 'flyers-invitations-small':
        case 'flyers-invitations-medium':
        case 'flyers-invitations-large':
            calculateFlyersPrice(priceItems);
            break;
        case 'yard-signs':
            calculateYardSignPrice(priceItems);
            break;
        case 'posters':
            calculatePosterPrice(priceItems);
            break;
        case 'brochures':
            calculateBrochurePrice(priceItems);
            break;
        case 'menus':
            calculateMenuPrice(priceItems);
            break;
        case 'banners':
            calculateBannerPrice(priceItems);
            break;
        case 'tickets':
            calculateTicketPrice(priceItems);
            break;
    }

    // Calculate total price from price items
    totalPrice = priceItems.reduce((total, item) => total + item.price, 0);

    // Display price breakdown
    priceItems.forEach(item => {
        const priceItem = document.createElement('div');
        priceItem.className = 'price-item';

        const itemName = document.createElement('span');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;

        priceItem.appendChild(itemName);
        priceItem.appendChild(itemPrice);
        priceBreakdown.appendChild(priceItem);
    });

    // Update total price display
    priceValue.textContent = `$${totalPrice.toFixed(2)}`;
}

// Calculate price for business cards
function calculateBusinessCardPrice(priceItems) {
    const quantityIndex = currentProduct.quantities.indexOf(currentOptions.quantity);
    const basePrice = currentProduct.prices[currentOptions.sides][quantityIndex];

    priceItems.push({
        name: `${currentProduct.name} (${currentOptions.quantity} qty, ${currentOptions.sides === '1sided' ? '1-sided' : '2-sided'})`,
        price: basePrice
    });

    // Apply reorder discount if selected
    if (currentOptions.reorder) {
        priceItems.push({
            name: 'Reorder Discount',
            price: -currentProduct.services['reorder-discount']
        });
    }
}

// Calculate price for flyers/invitations
function calculateFlyersPrice(priceItems) {
    const quantityIndex = currentProduct.quantities.indexOf(currentOptions.quantity);
    const basePrice = currentProduct.prices[currentOptions.sides][quantityIndex];

    priceItems.push({
        name: `${currentProduct.name} (${currentOptions.quantity} qty, ${currentOptions.sides === '1sided' ? '1-sided' : '2-sided'})`,
        price: basePrice
    });

    // Add design service if selected
    if (currentOptions.designService) {
        priceItems.push({
            name: 'Design Service',
            price: currentProduct.services.design
        });
    }

    // Add setup service if available and selected
    if (currentProduct.services.setup && currentOptions.setupService) {
        priceItems.push({
            name: 'Setup Service',
            price: currentProduct.services.setup
        });
    }
}

// Calculate price for yard signs
function calculateYardSignPrice(priceItems) {
    const quantityIndex = currentProduct.sizes[currentOptions.size].quantities.indexOf(currentOptions.quantity);
    let basePrice;

    if (currentOptions.size === '18x24') {
        basePrice = currentProduct.sizes[currentOptions.size].totalPrices[quantityIndex];
    } else {
        // For 8x24 & 12x24, calculate total price based on per unit price
        const pricePerUnit = currentProduct.sizes[currentOptions.size].pricePerUnit[quantityIndex];
        basePrice = pricePerUnit * currentOptions.quantity;
    }

    priceItems.push({
        name: `${currentProduct.name} - ${currentOptions.size} (${currentOptions.quantity} qty)`,
        price: basePrice
    });

    // Note: Design and stakes are included in the base price
}

// Calculate price for posters
function calculatePosterPrice(priceItems) {
    let basePrice = 0;
    let description = '';

    if (currentOptions.posterType === 'express') {
        const sizeIndex = currentProduct.types.express.sizes.indexOf(currentOptions.size);
        basePrice = currentProduct.types.express.prices[sizeIndex] * currentOptions.quantity;
        description = `Express Poster - ${currentOptions.size} (${currentOptions.quantity} qty)`;
    } else if (currentOptions.posterType.startsWith('standard-')) {
        const posterData = currentProduct.types[currentOptions.posterType];
        const quantityIndex = posterData.quantities.indexOf(currentOptions.quantity);
        basePrice = posterData.prices[quantityIndex];
        description = `${currentOptions.posterType.replace('standard-', 'Standard Poster ')} (${currentOptions.quantity} qty)`;

        // Add design service if selected
        if (currentOptions.designService) {
            priceItems.push({
                name: 'Design Service',
                price: posterData.design
            });
        }
    } else if (currentOptions.posterType === 'mounted' || currentOptions.posterType === 'paper' || currentOptions.posterType === 'canvas') {
        const posterData = currentProduct.types[currentOptions.posterType];
        const sizeIndex = posterData.sizes.indexOf(currentOptions.size);
        basePrice = posterData.prices[sizeIndex];

        const posterTypeLabel = currentOptions.posterType.charAt(0).toUpperCase() + currentOptions.posterType.slice(1);
        description = `${posterTypeLabel} Poster - ${currentOptions.size}`;

        // Add design service if not included and selected
        if (currentOptions.posterType !== 'canvas' &&
            posterData.design !== 'Included in Prices' &&
            currentOptions.designService) {
            priceItems.push({
                name: 'Design Service',
                price: posterData.design
            });
        }
    }

    priceItems.push({
        name: description,
        price: basePrice
    });
}

// Calculate price for brochures
function calculateBrochurePrice(priceItems) {
    const brochureData = currentProduct.types[currentOptions.brochureType];
    const quantityIndex = brochureData.quantities.indexOf(currentOptions.quantity);
    const basePrice = brochureData.prices[quantityIndex];

    const brochureTypeLabel = currentOptions.brochureType === '8.5x11' ? '8.5x11 Tri-Fold' : '11x17 Tri-Fold (2-sided)';

    priceItems.push({
        name: `${brochureTypeLabel} (${currentOptions.quantity} qty, ${currentOptions.stock})`,
        price: basePrice
    });

    // Add design service if selected
    if (currentOptions.designService) {
        priceItems.push({
            name: 'Design Service',
            price: brochureData.design
        });
    }
}

// Calculate price for menus
function calculateMenuPrice(priceItems) {
    const menuData = currentProduct.types[currentOptions.menuSize];
    const quantityIndex = menuData.quantities.indexOf(currentOptions.quantity);
    const basePrice = menuData.prices[quantityIndex];

    priceItems.push({
        name: `Menu ${currentOptions.menuSize} (${currentOptions.quantity} qty)`,
        price: basePrice
    });

    // Add design service if selected
    if (currentOptions.designService) {
        priceItems.push({
            name: 'Design Service',
            price: menuData.design
        });
    }
}

// Calculate price for banners
function calculateBannerPrice(priceItems) {
    const bannerData = currentProduct.types[currentOptions.bannerType];
    const basePrice = bannerData.price;

    // Format banner type for display
    let bannerTypeLabel = currentOptions.bannerType
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Special formatting for specific types
    if (currentOptions.bannerType.startsWith('retractable')) {
        bannerTypeLabel = `Retractable Banner ${currentOptions.bannerType.split('-')[1]}`;
    } else if (currentOptions.bannerType.startsWith('crossbow')) {
        bannerTypeLabel = `Cross-Bow Banner ${currentOptions.bannerType.split('-')[1]}`;
    } else if (currentOptions.bannerType.startsWith('step-repeat')) {
        bannerTypeLabel = currentOptions.bannerType.includes('pole')
            ? 'Step/Repeat Banner 8x8 with Pole Pocket'
            : 'Step/Repeat Banner 8x8';
    } else if (currentOptions.bannerType === 'led-lightbox') {
        bannerTypeLabel = 'LED Light Box (double-sided)';
    }

    priceItems.push({
        name: bannerTypeLabel,
        price: basePrice
    });
}

// Calculate price for tickets
function calculateTicketPrice(priceItems) {
    const ticketData = currentProduct.types[currentOptions.ticketType];
    const quantityIndex = ticketData.quantities.indexOf(currentOptions.quantity);
    let basePrice = 0;

    if (currentOptions.ticketType === 'standard') {
        basePrice = ticketData.prices[currentOptions.designOption][quantityIndex];

        const designOption = currentOptions.designOption === 'print-ready'
            ? 'Print Ready'
            : 'Design + Setup';

        priceItems.push({
            name: `Standard Tickets (${currentOptions.quantity} qty, ${designOption})`,
            price: basePrice
        });
    } else if (currentOptions.ticketType === 'raffle') {
        basePrice = ticketData.prices[currentOptions.colorOption][quantityIndex];

        const colorOption = currentOptions.colorOption === 'black-white'
            ? 'Black & White'
            : 'Color';

        priceItems.push({
            name: `Raffle Tickets (${currentOptions.quantity} qty, ${colorOption})`,
            price: basePrice
        });
    }
}
