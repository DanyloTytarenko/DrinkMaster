const RecipePreparation = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2
        style={{
          marginBottom: '40px',
          fontSize: '28px',
          lineHeight: 'calc(32/28)',
          letterSpacing: 0,
          color: '#f3f3f3',
        }}
      >
        Recipe Preparation
      </h2>
      <textarea
        name="instructions"
        placeholder="Enter the recipe"
        rows={7}
        required={true}
        style={{
          padding: '16px 18px',
          width: '90%',
          textTransform: 'capitalize',
          backgroundColor: 'inherit',
          color: 'rgba(243, 243, 243, 0.5)',
          border: '1px solid rgba(243, 243, 243, 0.5)',
          borderRadius: '14px',
        }}
      />
    </div>
  );
};
export default RecipePreparation;
